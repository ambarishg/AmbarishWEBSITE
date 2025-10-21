# Business Problem

User queries cannot be answered satisfactorily using a single source. We can use a very effective technique called **RAG**( Retrieval Augmented Generation) for getting the results from a rich context and sending it to a LLM( Large Language Model ). However , the results can be improved if the answer is enriched using other sources.The answer to this problem is combining the power of Agents which would help the RAG to combine other sources and provide an appropriate answer.

Let us take a concrete example. You are company which does **Field Service Management**. Your employees fix things. You have developed a mobile application which helps the field engineers to ask questions on a knowledge repository \[ You have used a Vector Database to load all your documents \]

> What happens if the information required is not present in the Vector database ?

Here is where Agentic RAG comes in

The Agent would first search in the Vector Database and then it would try to find answers from different sources from the enterprise such as \[ Databases , Applications , File Stores \].

The Agent would use Tools to get this information.

<div data-node-type="callout">
<div data-node-type="callout-emoji">💡</div>
<div data-node-type="callout-text">The code associated with the Blog is in the Github repository [ <a target="_self" rel="noopener noreferrer nofollow" href="https://github.com/ambarishg/crewai_azure" style="pointer-events: none">https://github.com/ambarishg/crewai_azure</a> ]</div>
</div>

# Flow of the Blog

The Blog follows the ***Concept to Code philosophy***

The first part is conceptual and is meant for all , executives and all technical audience. The second part goes into the implementation details targetting the technical audience.

# Agentic RAG

Agentic RAG combines the power of RAG with AI Agents.

## Simple RAG

Let us first look at the simple RAG

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1745545106950/6f0f3664-3a4a-4851-b3a7-b6d425ac7b81.jpeg align="center")

**Steps**

1. The user provides the Query
    
2. The query is used to search in the Vector Database
    
3. The results are returned to the orchestrator which sends the results to the LLM
    
4. The LLM utilizes the results to provide the answer
    

## Agentic RAG

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1745545822512/4f752b59-3ff3-4e62-b0c8-dbf98baf5fba.jpeg align="center")

**Steps**

1. The user provides the Query
    
2. The query is used to search in the Vector Database
    
3. The results are returned to the orchestrator which sends the results to the LLM
    
4. The LLM utilizes the results to provide the answer.
    

4a. <mark>Answer sent by the LLM is satisfactory, you are OK and no need to go to the next steps</mark>

5. Answer sent by the LLM is not satisfactory
    
6. Send the user input to the **Agent**
    
7. The Agent provides the answer
    

We can optimize this data flow a bit by not sending the results to the LLM at first. We can check if the search results are satisfactory before sending it to the LLM. The modified steps are as follows

1. The user provides the Query
    
2. The query is used to search in the Vector Database
    
3. The results are returned to the orchestrator which sends the results to the LLM
    
4. Check the search results sent by the Vector Database is satisfactory or not
    
5. <mark>If the search results are satisfactory send the search results to the LLM</mark>
    

5a. The LLM utilizes the results to provide the answer

6. If the search results are NOT satisfactory follow the next steps
    
7. Send the user input to the **Agent**
    
8. The Agent provides the answer
    

## Agent

An Agent is a composite system.

It has the following components

1. LLM
    
2. Tools
    
3. Planning
    
4. Memory
    

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1745548433727/41a392b2-ebda-42be-bcdc-ed9996067dbb.jpeg align="center")

We would be using **Crewai** as the agentic framework for this blog.

## Crewai

Crewai has the following components

* Crew
    
    * Top Level Organization
        
    * Manages Agents
        
    * Ensures collaboration
        
* Agents
    
    * Specialized Team members
        
    * Have specific Roles
        
    * Has Tasks associated with it
        
    * Has Tools
        
* Tasks
    
    * Uses specific tools
        
    * Has Individual assignments
        

Crewai has other components but for this discussion we would like to keep this simple and restrict ourselves to these components only

This agentic RAG would be done by Crewai using

1. Crew
    
2. 1 Simple Agent
    
3. 1 Task
    
4. 2 tools \[ A tool to search the Vector Database , another tool to search the Internet \]
    

When the user enters the query , the agent takes control and is responsible for using the Tasks and the Tools

### Agent

The Agent is a Router Assistant .

> You are an experienced assistant specializing in routing the flow to the appropriate tool.

### Tasks

The Agent uses the Task. The Task does this

> Based on the user's questions: ask the VECTOR DB TOOL. If the answer is not found, ask the SEARCH TOOL for the answer

Let us revisit

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1745545822512/4f752b59-3ff3-4e62-b0c8-dbf98baf5fba.jpeg align="center")

Note that the decision of choosing the VECTOR DB Tool or the Search Tool is taken by the Agent

# Implementation details

For this blog, we are using the following

* Vector Database - Qdrant Cloud
    
* LLM - Azure Open AI
    
* Agent Framework - Crew AI
    

### Crew AI Implementation details

```plaintext
# Configure the LLM
llm = LLM(model=os.getenv("model"),)
```

**Step 1** - We have first have to configure the LLM.

**Step 2** Next step is to define the Agent

```plaintext
# Define the Agent
router_agent = Agent(
    role='Router Assistant',
    goal='Assistant to route to the appropriate tool',
    backstory="You are an experienced assistant specializing in routing the flow to the appropriate tool.",
    verbose=True,
    allow_delegation=False,
    llm=llm,
    tools=[search_serper, rag_qdrant]  
)
```

Note the tools which we are using in this space

1. VECTOR DB tool = rag\_qdrant
    
2. SEARCH tool = search\_serper
    

**Step 3** Define the Task

```plaintext
# Define the Task
task = Task(
    description=""""
    Based on the user's questions: {questions}, 
    ask the tool rag_qdrant. If the answer is not found, 
    ask the tool search for the answer 
    """,
    expected_output="A properly well worded answer from the tool which can be used by the user.",
    agent=router_agent
)
```

**Step 4** Define the Crew

```plaintext
# Create the Crew
crew = Crew(
    agents=[router_agent],
    tasks=[task],
    verbose=True,
)
```

**Step 4** Run the Crew

```plaintext
# User input for travel preferences
user_input = {
    "questions": "What is naked trust ?"
}

# Execute the Crew
result = crew.kickoff(inputs=user_input)
```

## Tools Implementation Details

In this section we go into the details of the tools , Search Tool and the Vector DB Tool

### Search TOOL

Let us explore in depth the Search Tool

```plaintext
@tool('SerperDevTool')
def search_serper(search_query: str):
    """Search the web for information on a given topic"""
    tool = SerperDevTool(
    search_url=SEARCH_URL
    n_results=2,
)
```

The Search URL is "https://google.serper.dev/search"

Here we are using the **SerperDevTool** for searching Google

### VECTOR DB TOOL

```plaintext
@tool('RAG_QDRANT')
def rag_qdrant(search_query:str):
    """Gets the answer from Qdrant"""
    rag_helper = RAGSystem(AzureOpenAIManager())
    return (rag_helper.query(search_query))
```

Vector DB Tool is the Tool which uses the Qdrant Vector DB and Azure Open AI as the LLM to search as well as utilizes the LLM to get the result. We will in the subsequent sections go deeper and see the internals of the RAGSystem class

### RAG System Details

It has 2 components

* Retrieve - retrieve results from the Qdrant DB
    
* Query - get the response from the user query using the Vector DB and the LLM.
    

```plaintext
import os
import logging

class RAGSystem:
    def __init__(self, generator: ILLMHelper):
        self.generator = generator
        # Initialize Qdrant components
        logging.basicConfig(level=logging.INFO)
        logging.info("Loading model: %s", os.getenv("MODEL_NAME"))
        
    
    def retrieve(self, query: str) -> str:
        self.model = SentenceTransformer(os.getenv("MODEL_NAME"))
        self.client = qc.QdrantClient(
            url=os.getenv("QDRANT_URL"),
            api_key=os.getenv("QDRANT_KEY")
        )
        vector = self.model.encode(query, convert_to_tensor=True).tolist()
        results = self.client.search(
            collection_name=os.getenv("QDRANT_COLLECTION"),
            query_vector=vector,
            limit=5
        )
        return "\n---\n".join([r.payload["content"] for r in results])
    
    def query(self, query: str) -> str:
        context = self.retrieve(query)
        return self.generator.generate(context, query)
```

#### Init method

Initializes the LLM to be used by the class.

In this blog we have used the Azure Open AI model

#### Retrieve method

1. Uses SentenceTransformer model to create the embedding
    
2. Searches the VECTOR DB using the embedding
    
3. Gets the results from the embedding
    

#### Query method

1. Uses the retrieve method to get the context
    
2. Uses the context and the query to get the response
    

[Github Repo for this Blog](https://github.com/ambarishg/crewai_azure) is also provided