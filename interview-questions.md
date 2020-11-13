# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a function? Why would you use one?

Your answer: A function is a reusable piece of code that can be used throughout a program. Functions can be passed data as arguments (or perameters) that are then acted upon within the code block of the function. You would use a function is you wanted to be able to perform an action repeatedly within your code. You only have to write it once and it can be called or executed whenever you need it.

Researched answer: Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

2. What is the difference between .map() and .filter()?

Your answer: The .map() method loops an array of data and returns a new array that is the same length as the original. The .filter() method loops an array of data and returns a new array with only the data that meets the peremeters given to the method. Both of these methods are passed a function that is executed on each item in the array. Additionally, with both of these methods the original array is unchanged.

Researched answer: They do different things: . filter() returns a subset of the elements from the original array, while . map() produces an array with new, different entries based on the elements in the original array.

3. What is the difference between console.log() and return?

Your answer: The return statement ends the execution of a function, while the console.log() method actually logs data to the console as output.

Researched answer: The main purpose of the return value, is to use the function return value like you would have use a variable value. the console. log(); is a function (you can see the brackets) that will write the argument value on the console. And only the debuging console, in a browser you will not see anything on the screen.

4. In regards to functions, what is an argument?

Your answer: An argument is data that is passed to the function. The function then performs an action on the passed argument(s).

Researched answer: Function arguments are the real values passed to (and received by) the function.

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: Pair programming is performed by one person "driving" and the other "navigating". The driver is physically typing code while the navigator is guiding and working along side the driver to successfully code a program together. The roles of driver and navigator are reversed throughout the process giving both people an opportunity to participate in each respective role.

Researched answer: Pair programming essentially means that two people write code together on one machine. It is a very collaborative way of working and involves a lot of communication. While a pair of developers work on a task together, they do not only write code, they also plan and discuss their work. They clarify ideas on the way, discuss approaches and come to better solutions.

6. What is TDD? Describe the work flow associated with TDD.

Your answer: TDD is Test Driven Development. This is accomplished with the Red-Green Refactor method. First you write a "test" that basicially communicates what the program is supposed to accomplish. This is run first with the intention that it will fail (Red). Second you write the function explained in the test. If the function written passes the original test that returned as failed (Red) then the test passes (Green). If the function written fails, you know and can keep writing it until it does pass the test. Refactor - testing generally makes refactoring code easier to bug check.

Researched answer: Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the code is improved so that the tests pass. This is opposed to software development that allows code to be added that is not proven to meet requirements.

7. What is something we did in class this week you found helpful?

Your answer: Pseudo coding has been immensely helpful. It helped me sit back and formulate the logic before trying rack my brain for the code. Once I was ready to start the code, it was much easier to decide what actually needed to happen. This has been one of my biggest problems when learning to code on my own. I was continually confused as to what needed to happen when, where and why. Testing has also been very helpful. This morning I starting contemplating testing vs. pseudo coding and was wondering why you would pseudo code when you could just test. After a little bit of thought, I realized that testing is valuable for making sure that the code runs as expected and makes later refactoring more easily tested, whereas, pseudo coding is intended to communicate your code, not only to yourself but to anyone else who reviews your code in the future. Both are invaluable tools and skills.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- Classes
  Classes are a template for creating objects. They encapsulate data with code to work on that data.
- React
  React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.
- React State
  State is a JavaScript object that stores a component's dynamic data and determines the component's behaviour. Because state is dynamic, it enables a component to keep track of changing information in between renders and for it to be dynamic and interactive. State used to only be used within a class component but now state can be used in functional components using the Context API and Hooks.
- CRUD
  CRUD is an acronym for Create, Read, Update and Destroy (Delete). CRUD is also relevant at the user interface level of most applications. For example, in address book software, the basic storage unit is an individual contact entry. As a bare minimum, the software must allow the user to
  - create or add new entries;
  - read, retrieve, search, or view existing entries;
  - update or edit existing entries;
  - delete, deactivate, or remove existing entries.
    Without at least these four operations, the software cannot be considered complete. Because these operations are so fundamental, they are often documented and described under one comprehensive heading, such as "contact management", "content management" or "contact maintenance" (or "document management" in general, depending on the basic storage unit for the particular application).
