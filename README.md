# **Jest and React Testing Library**
- 1 [Introduction to Jest and React](#JestandReactTestingLibrary-IntroductiontoJestandReact)
- 2 [Naming and Location Conventions for Test Files](#JestandReactTestingLibrary-NamingandLocationConventionsforTestFiles)
- 3 [Folder structure](#JestandReactTestingLibrary-Folderstructure)
- 4 [Ways to Start Testing in Jest](#JestandReactTestingLibrary-WaystoStartTestinginJest)
- 5 [Defining and Testing Components](#JestandReactTestingLibrary-DefiningandTestingComponents) 
  - 5.1 [Defining a Component](#JestandReactTestingLibrary-DefiningaComponent)
  - 5.2 [Writing Tests for a Component](#JestandReactTestingLibrary-WritingTestsforaComponent)
- 6 [Testing Techniques](#JestandReactTestingLibrary-TestingTechniques)
- 7 [Selecting Elements By Role](#JestandReactTestingLibrary-SelectingElementsByRole) 
  - 7.1 [Accessible Names](#JestandReactTestingLibrary-AccessibleNames) 
    - 7.1.1 [Selecting By Accessible Name](#JestandReactTestingLibrary-SelectingByAccessibleName)
  - 7.2 [Accessible Names for Inputs](#JestandReactTestingLibrary-AccessibleNamesforInputs)
  - 7.3 [Applying a Name to Other Elements](#JestandReactTestingLibrary-ApplyingaNametoOtherElements)
- 8 [Query Functions](#JestandReactTestingLibrary-QueryFunctions) 
  - 8.1 [Looking for a Single Element?](#JestandReactTestingLibrary-LookingforaSingleElement?)
  - 8.2 [Looking for Multiple Elements?](#JestandReactTestingLibrary-LookingforMultipleElements?)
  - 8.3 [When to use each](#JestandReactTestingLibrary-Whentouseeach)
- 9 [Querying for Elements With Different Criteria](#JestandReactTestingLibrary-QueryingforElementsWithDifferentCriteria) 
  - 9.1 [When to Use Each](#JestandReactTestingLibrary-WhentoUseEach)
- 10 [Matchers](#JestandReactTestingLibrary-Matchers) 
  - 10.1 [Custom Matchers](#JestandReactTestingLibrary-CustomMatchers) 
    - 10.1.1 [Example of Custom Matcher](#JestandReactTestingLibrary-ExampleofCustomMatcher)
- 11 [Why the fallback test-id is not recommended](#JestandReactTestingLibrary-Whythefallbacktest-idisnotrecommended) 
  - 11.1 [Alternatives to the fallback test-id](#JestandReactTestingLibrary-Alternativestothefallbacktest-id)
- 12 [Why Label Should Be Related to htmlFor and an id in Unit Tests](#JestandReactTestingLibrary-WhyLabelShouldBeRelatedtohtmlForandanidinUnitTests)
- 13 [Why Use Regular Expressions in Jest and React Testing Library Unit Tests](#JestandReactTestingLibrary-WhyUseRegularExpressionsinJestandReactTestingLibraryUnitTests)
- 14 [Creating Mocks](#JestandReactTestingLibrary-CreatingMocks) 
  - 14.1 [Manual Mocks](#JestandReactTestingLibrary-ManualMocks)
  - 14.2 [Automatic Mocks](#JestandReactTestingLibrary-AutomaticMocks)
- 15 [Testing GraphQL APIs](#JestandReactTestingLibrary-TestingGraphQLAPIs) 
  - 15.1 [Setting up the Test Environment](#JestandReactTestingLibrary-SettinguptheTestEnvironment)
  - 15.2 [Testing Queries](#JestandReactTestingLibrary-TestingQueries)
  - 15.3 [Testing Mutations](#JestandReactTestingLibrary-TestingMutations)
  - 15.4 [Creating Mocks](#JestandReactTestingLibrary-CreatingMocks.1)
  - 15.5 [Conclusion](#JestandReactTestingLibrary-Conclusion)
- 16 [Mocking External Dependencies](#JestandReactTestingLibrary-MockingExternalDependencies) 
  - 16.1 [Why Mock External Dependencies?](#JestandReactTestingLibrary-WhyMockExternalDependencies?)
  - 16.2 [Mocking Modules with Jest](#JestandReactTestingLibrary-MockingModuleswithJest)
  - 16.3 [Mocking API Calls](#JestandReactTestingLibrary-MockingAPICalls)
- 17 [Best Practices for Jest Testing](#JestandReactTestingLibrary-BestPracticesforJestTesting) 
  - 17.1 [Writing Readable and Maintainable Tests](#JestandReactTestingLibrary-WritingReadableandMaintainableTests)
  - 17.2 [Organizing Test Files and Folders](#JestandReactTestingLibrary-OrganizingTestFilesandFolders)
  - 17.3 [Writing Testable Code](#JestandReactTestingLibrary-WritingTestableCode)
  - 17.4 [Running Tests Frequently](#JestandReactTestingLibrary-RunningTestsFrequently)
- 18 [Licence](#JestandReactTestingLibrary-Licence) 

# **Introduction to Jest and React**
[Jest](https://jestjs.io/) is a testing framework developed by Facebook, designed specifically for testing JavaScript applications. [React](https://reactjs.org/) is a popular JavaScript library for building user interfaces. Together, Jest and React make it easy to create unit tests that help ensure the quality and stability of your React code.

In this documentation, we'll provide an overview of Jest and React, and show you how to use Jest to test your React components and applications. We'll cover the basics of writing tests with Jest, including creating test files, defining test suites and test cases, and using Jest's built-in testing utilities.

We'll also explore some advanced testing techniques, such as mocking and snapshot testing, and show you how to use them in your React tests. Whether you're new to Jest and React testing or an experienced developer looking to take your testing skills to the next level, this documentation will provide you with the knowledge and tools you need to create high-quality, reliable tests for your React code.

# **Naming and Location Conventions for Test Files**
To have Jest and React Testing Library automatically recognize test files, there are naming and location conventions that must be followed.

- **File extension:**
Jest looks for files ending in `.test.js`, `.spec.js`, `.test.ts`, or `.spec.ts`. These extensions indicate that the file is a test.

- **File location:**
By default, Jest looks for test files anywhere inside the working directory that contains a folder named `__tests__`. For example, if you have a folder named src and inside it a folder named `__tests__`, Jest will automatically search for all test files within the latter folder.

- **File name:**
The file name should match the name of the file being tested, followed by `.test` or `.spec`. For example, if you are testing a component called `Button.js`, the test file should be named `Button.test.js` or `Button.spec.js`.

```
It's important to follow these conventions so that Jest and React Testing Library can automatically identify test files and execute them correctly.
```

# **Folder structure**
The folder structure of a project using Jest and React Testing Library to test a React application may vary depending on the preferences and needs of each development team. However, here is a possible folder structure that you can follow:

```
my-app/
  src/
    components/
      Component1.js
      Component2.js
      ...
    pages/
      Page1.js
      Page2.js
      ...
    utils/
      api.js
      helpers.js
      ...
  __tests__/
    components/
      Component1.test.js
      Component2.test.js
      ...
    pages/
      Page1.test.js
      Page2.test.js
      ...
    utils/
      api.test.js
      helpers.test.js
      ...
  package.json
  ...
```

In this structure, the application files are located inside the `src` folder, organized into subfolders according to their function (`components`, `pages`, `utils`, etc.). On the other hand, test files are located inside the `__tests__` folder, with a similar structure to the `src` folder.

For example, in the `components` folder, the React component files that make up the application would be located, while in the `components/__tests__` folder, the corresponding test files for each component would be located.

This way, you can maintain an organized and coherent folder structure, which facilitates the maintenance and scalability of the project.

# **Ways to Start Testing in Jest**
There are several ways to start testing your React code with Jest. In this documentation, we'll cover the most common methods of initiating tests with Jest:

- **Running tests with yarn:** Jest can be run as an yarn script, which makes it easy to integrate with your existing build process. Simply add a "test" script to your package.json file and run `yarn test` to start your tests.
- **Running tests with the Jest CLI:** Jest can also be run from the command line using the Jest CLI. This is a good option if you want to run tests outside of an yarn script or if you want more control over the test runner.
- **Running tests with a test runner:** Jest can be integrated with popular test runners like [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner) or [Jest Test Explorer](https://marketplace.visualstudio.com/items?itemName=kavod-io.vscode-jest-test-adapter). These tools provide a visual interface for running and managing your tests.

No matter which method you choose, Jest makes it easy to write and run tests for your React code. In the next sections, we'll dive deeper into each of these methods and show you how to get started with testing your React components and applications. 

# **Defining and Testing Components**
One of the core features of Jest is the ability to test React components. In this section, we'll walk through the process of defining a component and writing tests for it.

## **Defining a Component**
When defining a component, it's important to consider its props and state, as well as how it will render in the UI. Here's an example of a simple component that takes a name prop and renders a greeting:

```javascript
import React from 'react';

const Greeting =({ name }) => {
    return <h1>Hello, {name}!</h1>;
}

export default Greeting;
```

## **Writing Tests for a Component**
Once you've defined your component, the next step is to write tests for it. Jest provides a number of tools for testing React components, including `render` and `fireEvent`. Here's an example of a test suite for our `Greeting` component:

```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting', () => {
    it('renders a greeting with the correct name', () => {
    const { getByText } = render(<Greeting name="Alice" />);
    expect(getByText(/hello, alice/i)).toBeInTheDocument();
    });

    it('updates the name when the input field is changed', () => {
        const { getByLabelText, getByText } = render(<Greeting name="Alice" />);
        const input = getByLabelText('Name');
        fireEvent.change(input, { target: { value: 'Bob' } });
        expect(getByText(/hello, bob/i)).toBeInTheDocument();
    });
});
```

In this example, we're using `render` to create a test instance of our `Greeting` component and `getByText` to select elements by their text content. We're also using `fireEvent` to simulate user interactions with the component.

By defining your components and writing tests for them, you can ensure that your React code is reliable and robust. In the next sections, we'll explore more advanced testing techniques, including mocking and snapshot testing, that can help you create even more effective tests.

# **Testing Techniques**
```
Jest provides a variety of testing techniques that you can use to test your React components and applications. In this section, we'll cover some of the most common techniques and explain how they work.
```

# **Selecting Elements By Role**
Selecting elements based upon their role is the preferred way of testing elements with React Testing Library. We use role selectors instead of more classic ways of finding elements, like CSS selectors.

ARIA (Accessible Rich Internet Applications) is a set of attributes that can be added to HTML elements to help make web applications more accessible to users with disabilities. These attributes provide additional information about the purpose and behavior of an element, which can be used by assistive technologies such as screen readers to improve the user experience.

Even though these ARIA roles are an additional topic to memorize, we engineers use them because they allow us to write more flexible tests. In many cases it doesn't matter if an element is presenting text in an `h1` element or an `h3` element. By finding elements based on their role, we can make small changes to a component and not break its respective test. Some engineers do not care for this flexibility. If you don't wish to use ARIA roles, you can always fall back to using standard CSS selectors.

Some elements - not all - are 'implicitly' (or automatically) assigned a role. Some of the more commonly-used roles can be found in the `RoleExample` component below.

```javascript
const RoleExample = () => {

return (
    <div>
        <a href="/">Link</a>
        <button>Button</button>
        <footer>Contentinfo</footer>
        <h1>Heading</h1>
        <header>Banner</header>
        <img alt="description" /> Img
        <input type="checkbox" /> Checkbox
        <input type="number" /> Spinbutton
        <input type="radio" /> Radio
        <input type="text" /> Textbox
        <li>Listitem</li>
        <ul>Listgroup</ul>
    </div>
    );
}

```

Many elements have roles that are easy to memorize. Here are some of the easier ones to remember:

|**Element**|**Role**|
| :-: | :-: |
|`a` with `href`|link |
|`h1`, `h2`, ..., `h6`|heading |
|`button`|button |
|`img` with `alt`|img |
Other elements can be a little more challenging to remember. For example:

|**Element**|**Role**|
| :-: | :-: |
|`input` with `type="number"`|spinbutton |
|`header`|banner |
|`footer`|contentinfo |

```javascript
test('can find elements by role', () => {

    render(<RoleExample />);

    const roles = [
        'link',
        'button',
        'contentinfo',
        'heading',
        'banner',
        'img',
        'checkbox',
        'spinbutton',
        'radio',
        'textbox',
        'listitem',
        'list'
    ];

    for (let role of roles) {
        const el = screen.getByRole(role);
        expect(el).toBeInTheDocument();
    }

});

```

## **Accessible Names**
Sometimes multiple elements of the same type will be displayed by a component, and you will need to find a particular instance of that element. You can be more specific by finding elements based upon their role *and* their accessible name.

The accessible name of most elements is the text placed between the JSX tags. For example, the accessible name of `<a href="/">Home</a>` is `Home`.

In the component below, two `button` elements are displayed. The only difference between them is the text they contain. Their accessible names are `Submit` and `Cancel`, respectively.


```javascript
const AccessibleName = () => {
return (
    <div>
        <button>Submit</button>
        <button>Cancel</button>
    </div>
    );
}
```
### **Selecting By Accessible Name**
Elements with a defined acessible name can be selected by passing a filtering object to the `getByRole` method. Example below.

```javascript
test('can select by accessible name', () => {
    render(<AccessibleName />);

    const submitButton = screen.getByRole('button', {
        name: /submit/i
    });

    const cancelButton = screen.getByRole('button', {
        name: /cancel/i
    });
    expect(submitButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
});
```

## **Accessible Names for Inputs**
Self-closing elements (also known as 'void elements') like `input`, `img`, and `br` cannot contain text. Defining accessible names for them is done differently.

To define an accessible name for `input` elements in particular, you can associate the input with a `label`. The `input` element should have an assigned `id` prop, and the label should have an identical `htmlFor` prop. Once this link has been formed, the `input` can then be selected by using the `label` text as an accessible name.

```javascript
const MoreNames = () => {

    return (
    <div>
        <label htmlFor="email">Email</label>
        <input id="email" />
        <label htmlFor="search">Search</label>
        <input id="search" />
    </div>
    );
}
```

```javascript
test('shows an email and search input', () => {
    render(<MoreNames />);
    const emailInput = screen.getByRole('textbox', {
        name: /email/i
    });
    const searchInput = screen.getByRole('textbox', {
        name: /search/i
    });
    expect(emailInput).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
});
```

## **Applying a Name to Other Elements**
If you're working with a void element (like a `br` or an `img`), or if you're working with an element that doesn't show plain text, you can apply an accessible name by using the `aria-label` attribute.

In the example below, two `button` elements are being displayed, but they do not contain traditional text. Instead, they are displaying `svg` elements, which are used to display icons.

To select these `button` elements, you can apply an `aria-label` attribute to them. This sets their accessible name.

```javascript
const IconButtons = () => {
    return (
    <div>
        <button aria-label="sign in">
        <svg />
        </button>
        <button aria-label="sign out">
        <svg />
        </button>
    </div>
    );
}
```

```javascript
test('find elements based on label', () => {
    render(<IconButtons />);
    const signInButton = screen.getByRole('button', {
        name: /sign in/i
    });

    const signOutButton = screen.getByRole('button', {
        name: /sign out/i
    });

    expect(signInButton).toBeInTheDocument();
    expect(signOutButton).toBeInTheDocument();
});
```

# **Query Functions**
All query functions are accessed through the screen object in a test. These query functions *always* begin with one of the following names: getBy, getAllBy, queryBy, queryAllBy, findBy, findAllBy. 

|**Start of Function Name**|**Examples**|
| :-: | :-: |
|getBy |getByRole, getByText |
|getAllBy |getAllByText, getByDisplayValue |
|queryBy |queryByDisplayValue, queryByTitle |
|queryAllBy |queryAllByTitle, queryAllByText |
|findBy |findByRole, findBytext |
|findAllBy |findAllByText, findAllByDisplayValue |

These names indicate the following:

- Whether the function will return an element or an array of elements
- What happens if the function finds 0, 1, or > 1 of the targeted element
- Whether the function runs instantly (synchronously) or looks for an element over a span of time (asynchronously)
### **Looking for a Single Element?**

|**Name**|**0 matches**|**1 match**|**> 1 match**|**Notes**|
| :-: | :-: | :-: | :-: | :-: |
|getBy |Throw |Element |Throw ||
|queryBy |null |Element |Throw ||
|findBy |Throw |Element |Throw |Looks for an element over the span of 1 second |

### **Looking for Multiple Elements?**

|**Name**|**0 matches**|**1 match**|**> 1 match**|**Notes**|
| :-: | :-: | :-: | :-: | :-: |
|getAllBy |Throw |[]Element |[]Element ||
|queryAllBy |[ ] |[]Element |[]Element ||
|findAllBy |Throw |[]Element |[]Element |Looks for elements over the span of 1 second |


### **When to use each**

|**Goal of test**|**Use**|
| :-: | :-: |
|Prove an element exists |getBy, getAllBy |
|Prove an element does **not** exist |queryBy, queryAllBy |
|Make sure an element eventually exists |findBy, findAllBy |

```javascript
const ColorList = () => {
    return (
    <ul> 
        <li>Red</li> 
        <li>Blue</li>
        <li>Green</li>
    </ul>
    );
}
```

```javascript
test('getBy, queryBy, findBy finding 0 elements', async () => {
    render(<ColorList />);
    expect(
        () => screen.getByRole('textbox')
    ).toThrow();

    expect(screen.queryByRole('textbox')).toEqual(null);

    let errorThrown = false;

    try {
        await screen.findByRole('textbox');
    } catch (err) {
        errorThrown = true;
    }
    expect(errorThrown).toEqual(true);
});
```

```javascript
test('getBy, queryBy, findBy when they find 1 element', async () => {
    render(<ColorList />);

    expect(
        screen.getByRole('list')
    ).toBeInTheDocument();

    expect(
        screen.queryByRole('list')
    ).toBeInTheDocument()

    expect(
        await screen.findByRole('list')
    ).toBeInTheDocument()
});
```

```javascript
test('getBy, queryBy, findBy when finding > 1 elements', async () => {
    render(<ColorList />);

    expect(
        () => screen.getByRole('listitem')
    ).toThrow();
    expect(
    (   ) => screen.queryByRole('listitem')
    ).toThrow();

    let errorThrown = false;
    try {
        await screen.findByRole('listitem');
    } catch (err) {
        errorThrown = true;
    }
    expect(errorThrown).toEqual(true);
});

```

```javascript
test('getAllBy, queryAllBy, findAllBy', async () => {

    render(<ColorList />);
    expect(
        screen.getAllByRole('listitem')
    ).toHaveLength(3);

    expect(
        screen.queryAllByRole('listitem')
    ).toHaveLength(3);

    expect(
        await screen.findAllByRole('listitem')
    ).toHaveLength(3);

});
```

```javascript
test('favor using getBy to prove an element exists', () => {

    render(<ColorList />);
    const element = screen.getByRole('list');
    expect(element).toBeInTheDocument();

});
```

```javascript
test('favor queryBy when proving an element does not exist', () => {
    render(<ColorList />);
    const element = screen.queryByRole('textbox');
    expect(element).not.toBeInTheDocument();
});

```

```javascript
import { useState, useEffect } from 'react';
const fakeFetchColors = () => {
    return Promise.resolve(
        ['red', 'green', 'blue']
    );
}
```

```javascript
const LoadableColorList = () => {
    const [colors, setColors] = useState([]);
        useEffect(() => {
        fakeFetchColors()
        .then(c => setColors(c));
        }, []);

    const renderedColors = colors.map(color => {
        return <li key={color}>{color}</li>
    });

    return <ul>{renderedColors}</ul>
}
```

```javascript
test('Favor findBy or findAllBy when data fetching', async () => {
    render(<LoadableColorList />);
    const els = await screen.findAllByRole('listitem');
    expect(els).toHaveLength(3);
});
```

# **Querying for Elements With Different Criteria**
React Testing Library provides many different query functions. Each begins with a name like `getBy`, `findBy`, etc. The names also have common endings. The different name endings indicate how the query for an element will be performed.

|**End of Function Name**|**Search Criteria**|
| :-: | :-: |
|ByRole |Finds elements based on their implicit or explicit ARIA role |
|ByLabelText |Find form elements based upon the text their paired labels contain |
|ByPlaceholderText |Find form elements based upon their placeholder text |
|ByText |Find elements based upon the text they contain |
|ByDisplayValue |Find elements based upon their current value |
|ByAltText |Find elements based upon their alt attribute |
|ByTitle |Find elements based upon their title attribute |
|ByTestId |Find elements based upon their data-testid attribute |

## **When to Use Each**
Always prefer using query functions ending with `ByRole`. Only use others if `ByRole` is not an option.

```javascript
import { screen, render } from '@testing-library/react';
import { useState } from 'react';
const DataForm = () => {
    const [email, setEmail] = useState('asdf@asdf.com');
    return (
    <form>
        <h3>Enter Data</h3>
        <div data-testid="image wrapper">
        <img alt="data" src="data.jpg" />
        </div>
        <label htmlFor="email">Email</label>
        <input 
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="color">Color</label>
        <input id="color" placeholder="Red" />
        <button title="Click when ready to submit">
            Submit
        </button>
    </form>
    );
}
```

```javascript
test('selecting different elements', () => {
    render(<DataForm />);

    const elements = [
        screen.getByRole('button'),
        screen.getByText(/enter/i),
        screen.getByLabelText(/email/i),
        screen.getByPlaceholderText('Red'),
        screen.getByDisplayValue('asdf@asdf.com'),
        screen.getByAltText('data'),
        screen.getByTitle(/ready to submit/i),
        screen.getByTestId('image wrapper')
    ];

    for (let element of elements) {
        expect(element).toBeInTheDocument();
    }
});
```

# **Matchers**
Matchers help ensure that a value is what we expect it to be. In a project generated by Create React App, we have access to all the matchers included in Jest, as well as matchers defined in the `@testing-library/jest-dom package`.

## **Custom Matchers**
Custom matchers are a powerful tool that allows developers to create their own comparison rules for finding matches in texts. With custom matchers, users can define their own search criteria instead of relying on the default algorithms provided by natural language processing libraries.

This means that custom matchers can be tailored to any type of search problem, from identifying specific terms to searching for complex patterns in the text. Additionally, custom matchers are highly configurable, allowing developers to adjust the sensitivity of search criteria according to their needs.

By creating custom matchers, users can take advantage of the flexibility and customization they offer to create more accurate and efficient solutions for their projects. In summary, custom matchers are a valuable tool for any project that requires personalized and specific searches in texts.

|**Name**|**Link**|
| :-: | :-: |
|Jest |<https://jestjs.io/docs/mock-function-api>|
|@testing-library/jest-dom |<https://github.com/testing-library/jest-dom>|

```javascript
import { screen, render, within } from '@testing-library/react';

const FormData = () => {
    return (
    <div>
        <button>Go Back</button>
        <form aria-label="form">
        <button>Save</button>
        <button>Cancel</button>
        </form>
    </div>
    )
}
```

### **Example of Custom Matcher**

```javascript
const toContainRole = (container, role, quantity = 1) => {
const elements = within(container).queryAllByRole(role);

    if (elements.length === quantity) {
        return {
            pass: true
        };
    }
    return {
        pass: false,
        message: () => `Expected to find ${quantity} ${role} elements. Found ${elements.length} instead.`
    }
}

expect.extend({ toContainRole });
```

```javascript
test('the form displays two buttons', () => {
    render(<FormData />);
    const form = screen.getByRole('form');
    expect(form).toContainRole('button', 2);
});
```

# **Why the fallback test-id is not recommended**
The `data-testid` attribute is commonly used in React Testing Library to select elements in automated tests, however, some developers may be tempted to use a "fallback" test-id when an element doesn't have a unique identifier. This fallback test-id could be, for example, the value of the element's `class` attribute.

While this may seem like a quick solution, it's actually a bad practice that can lead to problems in the long run:

- **Fragility:** If the `class` value changes for any reason, the test could stop working and be difficult to debug. Additionally, if the `class` is used for other purposes (such as CSS styles), this can create conflicts and make the code harder to maintain.
- **Ambiguity:** If multiple elements have the same `class`, the test could select the wrong element and produce false results or even cause errors in the application.

## **Alternatives to the fallback test-id**
Instead of using the fallback test-id, there are some alternatives that can help identify elements more accurately and robustly:

- **Specific attributes:** Instead of using `data-testid` as a general attribute, it's recommended to use more specific attributes that relate to the element's functionality. For example, instead of `data-testid="button"`, you could use `data-test-action="submit-form"`.

- **Semantic labels:** Another alternative is to use HTML semantic labels (such as `<button>`, `<input>`, `<label>`, etc.) and select elements based on their type and properties. For example, `getByRole('button', { name: /submit/i })` would select a button that contains the word "submit" in its name label.

- **Access paths:** In some cases, it's possible to access elements using the structure of the HTML page and the hierarchy of elements in the DOM. For example, `getByLabelText('Username')` would select an `input` element that is labeled with `for="username"` or that has a `label` element containing the text "Username".

In summary, it's important to avoid using the fallback test-id and use more specific and robust strategies for selecting elements in automated tests. This will help ensure that the tests are reliable and easy to maintain in the long run.

# **Why Label Should Be Related to htmlFor and an id in Unit Tests**
When writing unit tests for React components using Jest and React Testing Library, it's important to ensure that labels are properly associated with their corresponding input elements.

In HTML, the `label` element associates a text label with a form control such as `input`, `textarea`, or `select`. This is achieved through two attributes: `for` and `id`. The for attribute on a `label` element should match the `id` attribute on the corresponding form control element.

Here's an example:

```javascript
<label htmlFor="username">Username:</label>
<input id="username" type="text" />
```

When a user clicks on the label, it will automatically focus the associated input element. This is not only good for accessibility but also improves the user experience.

When writing unit tests, it's important to replicate this behavior by using the `getByLabelText` query provided by React Testing Library. This query allows you to select an input element based on its associated label text.

Here's an example of a unit test that uses `getByLabelText`:

```javascript
test('renders username input', () => {
    render(
    <form>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" />
    </form>
    );

    const input = screen.getByLabelText('Username:');
    expect(input).toBeInTheDocument();
});
```

By properly associating labels with form controls using htmlFor and id, you can write more robust and accessible unit tests for your React components.

# **Why Use Regular Expressions in Jest and React Testing Library Unit Tests**
When writing unit tests for React components using Jest and React Testing Library, it's often necessary to search for a specific text within a rendered component. While it's possible to use plain strings to search for text, using regular expressions can provide more flexibility and accuracy in matching text.

Regular expressions are a pattern matching language that can be used to search for complex text patterns. By using regular expressions, you can search for text that matches a specific pattern or contains certain keywords, without having to write separate tests for each variation.

Here's an example of a unit test that uses a regular expression to search for text within a component:

```javascript
test('renders the correct text', () => {
    render(<MyComponent />);
    const expectedText = /Welcome to MyComponent/;
    const actualText = screen.getByText(expectedText);
    expect(actualText).toBeInTheDocument();
});
```

In this example, the `getByText` query is used to search for a string that matches the regular expression `/Welcome to MyComponent/`. This regular expression will match any string that contains the phrase "Welcome to MyComponent", regardless of the presence of additional characters or whitespace.

Using regular expressions in Jest and React Testing Library unit tests can also help ensure that your tests are resilient to changes in your codebase. For example, if you refactor your component to change the text that's being rendered, your regular expression-based tests will still pass as long as the text matches the expected pattern.

However, it's important to use regular expressions judiciously and with care, as they can also introduce additional complexity and potential errors if not used correctly. In general, regular expressions should be used when searching for complex or dynamic text patterns that are difficult to match with plain strings.

By using regular expressions in your Jest and React Testing Library unit tests, you can write more flexible, accurate, and resilient tests for your React components.

# **Creating Mocks**
In some situations, you may want to simulate the behavior of a module, object, or function instead of using its real implementation in a test. In Jest and React Testing Library, you can create mocks to achieve this.

## **Manual Mocks**
To create a manual mock, you can use the `jest.fn()` function to create an empty function that records all calls to it. Then, you can specify the behavior of the mocked function using the `mockImplementation()` or `mockReturnValue()` methods.

For example, to create a manual mock of a `getUser()` function that always returns a user object with name "John", you can do the following:

```javascript
const getUser = jest.fn().mockReturnValue({ name: "John" });
```

## **Automatic Mocks**
Jest and React Testing Library can also create mocks automatically using the `jest.mock()` function. This function takes the path to the module being mocked and returns a mock object.

For example, if you have a `api.js` module that contains a `getUser()` function you want to mock, you can do the following:

```javascript
// api.js

export function getUser() {
    // implementation details
}

// api.test.js
jest.mock('./api');
const { getUser } = require('./api');
test('mocked getUser returns a user object', () => {
    getUser.mockReturnValue({ name: 'John' });
    // test implementation
});
```

In this example, Jest automatically creates a mock of the `api.js` module and its `getUser()` function.

Using mocks can be useful for isolating the code being tested and simplifying the test setup. You can create mocks in the same test file or in a separate mocks folder to keep your tests organized and maintainable.

# **Testing GraphQL APIs**
GraphQL is a query language that provides a powerful and flexible way to request and receive data from an API. When testing GraphQL APIs, Jest and React Testing Library can be used to simulate GraphQL queries and mutations and verify that the API returns the expected data.

## **Setting up the Test Environment**
Before testing a GraphQL API, you'll need to set up the test environment with the necessary dependencies. One popular choice is the `apollo-server-testing `package, which provides utilities for testing GraphQL servers.

To install `apollo-server-testing:`

```
yarn add apollo-server-testing --save-dev
```

## **Testing Queries**
To test a GraphQL query, you can use the `graphql` function from `apollo-server-testing` to simulate the query and verify that it returns the expected data. Here's an example test for a simple query that retrieves a list of todos:

```javascript
const { graphql } = require('apollo-server-testing');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const typeDefs = `
  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
  }
  type Query {
    todos: [Todo]
  }
`;
const resolvers = {
  Query: {
    todos: () => [
      { id: '1', title: 'Do laundry', completed: false },
      { id: '2', title: 'Walk the dog', completed: true },
    ],
  },
};
const schema = makeExecutableSchema({ typeDefs, resolvers });

test('fetches todos', async () => {
  const query = `
    query {
      todos {
        id
        title
        completed
      }
    }
  `;
  const { data } = await graphql(schema, query);
  expect(data).toEqual({
    todos: [
      { id: '1', title: 'Do laundry', completed: false },
      { id: '2', title: 'Walk the dog', completed: true },
    ],
  });
});

```

In this example, the `graphql` function is used to simulate a query and return the data defined in the `resolvers`. The test verifies that the data returned matches the expected data.

## **Testing Mutations**
To test a GraphQL mutation, you can use the `mutate` function from `@apollo/client/testing` to simulate the mutation and verify that it has the expected effect on the API. Here's an example test for a simple mutation that adds a new todo:

```javascript
import { MockedProvider } from '@apollo/client/testing';
import { ADD_TODO } from './mutations';
import { render, fireEvent, waitFor } from '@testing-library/react';

const mocks = [
  {
    request: {
      query: ADD_TODO,
      variables: { title: 'Do laundry' },
    },
    result: {
      data: {
        addTodo: { id: '1', title: 'Do laundry', completed: false },
      },
    },
  },
];

test('adds a new todo', async () => {
  const { getByTestId, getByLabelText } = render(
    <MockedProvider mocks={mocks}>
      <TodoForm />
    </MockedProvider>
  );

  const input = getByLabelText('Title');
  const button = getByTestId('add-button');

  fireEvent.change(input, { target: { value: 'Do laundry' } });
  fireEvent.click(button);

  await waitFor(() =>
    expect(getByLabelText('Do laundry')).toBeInTheDocument()
  );
});
```

In this example, the `MockedProvider` component is used to simulate the API response to the mutation. The test simulates a user interacting with a form to add a new todo, and verifies that the API returns the expected data.

## **Creating Mocks**
When testing GraphQL APIs, it's often useful to create mocks for the data returned by the API. This allows you to test different scenarios and edge cases, and to avoid dependencies on external APIs.

There are several ways to create mocks in Jest and React Testing Library. One common approach is to create mock resolvers using the `mockedResolvers` utility from `apollo-server-testing`. Here's an example of how to use `mockedResolvers` to create a mock resolver for a simple query:

```javascript
const { mockedResolvers } = require('apollo-server-testing');
const resolvers = {
  Query: {
    todos: () => [
      { id: '1', title: 'Do laundry', completed: false },
      { id: '2', title: 'Walk the dog', completed: true },
    ],
  },
};
const mockResolvers = mockedResolvers(resolvers);

test('fetches todos', async () => {
  const query = `
    query {
      todos {
        id
        title
        completed
      }
    }
  `;
  const { data } = await graphql({ schema, query, mockResolvers });
  expect(data).toEqual({
    todos: [
      { id: '1', title: 'Do laundry', completed: false },
      { id: '2', title: 'Walk the dog', completed: true },
    ],
  });
});
```

In this example, `mockedResolvers` is used to create a mock resolver for the `todos` query. The mock resolver returns a fixed list of todos, which allows the test to verify that the API returns the expected data.

Another approach to creating mocks is to use the `mockResolvedValue` method from `jest.fn()`. Here's an example of how to use `mockResolvedValue` to create a mock for a mutation:

```javascript
import { useMutation } from '@apollo/client';
import { ADD_TODO } from './mutations';

jest.mock('@apollo/client', () => ({
  useMutation: jest.fn(),
}));

test('adds a new todo', async () => {
  useMutation.mockResolvedValueOnce({
    data: {
      addTodo: { id: '1', title: 'Do laundry', completed: false },
    },
  });

  const { getByLabelText, getByTestId } = render(<TodoForm />);

  const input = getByLabelText('Title');
  const button = getByTestId('add-button');

  fireEvent.change(input, { target: { value: 'Do laundry' } });
  fireEvent.click(button);

  await waitFor(() =>
    expect(getByLabelText('Do laundry')).toBeInTheDocument()
  );

  expect(useMutation).toHaveBeenCalledWith(ADD_TODO, {
    variables: { title: 'Do laundry' },
  });
});
```

In this example, `jest.mock()` is used to create a mock for the `useMutation` hook from `@apollo/client`. The `mockResolvedValue` method is used to simulate the API response to the mutation. The test verifies that the API call is made with the expected variables.

## **Conclusion**
Testing GraphQL APIs with Jest and React Testing Library requires some setup, but provides a powerful way to verify that your API returns the expected data. By creating mocks for the API responses, you can test different scenarios and edge cases, and avoid dependencies on external APIs.

# **Mocking External Dependencies**
When writing tests, it's often necessary to mock external dependencies, such as API calls, to isolate the code being tested and avoid unintended side effects. In Jest, you can use the `jest.mock()` function to mock modules and their exports.

## **Why Mock External Dependencies?**
Mocking external dependencies is important because it allows you to test your code in isolation from external factors that may not be under your control. For example, if your code makes an API call to a server, you don't want your tests to fail if the server is down or if the API response changes. By mocking the API call, you can ensure that your tests only depend on the behavior of your own code.

## **Mocking Modules with Jest**
Jest provides a built-in way to mock modules. You can use the `jest.mock()` function to replace a module with a mock implementation. Here's an example:

```javascript
import axios from 'axios';

export async function getData() {
  const response = await axios.get('https://api.example.com/data');
  return response.data;
}

// test file
import axios from 'axios';
import { getData } from './file-being-tested';

jest.mock('axios');

test('getData returns expected data', async () => {
  const expectedData = { foo: 'bar' };
  axios.get.mockResolvedValueOnce({ data: expectedData });

  const result = await getData();
  expect(result).toEqual(expectedData);
});
```

In this example, we're mocking the `axios` module by calling `jest.mock('axios')` at the top of our test file. Then, in our test, we're using `axios.get.mockResolvedValueOnce()` to set the mock response for the API call.

## **Mocking API Calls**
When mocking API calls, it's important to ensure that your mock behaves similarly to the real API. One way to do this is to use a library like `msw` (Mock Service Worker) or `nock` to mock the HTTP requests and responses. Here's an example using `msw`:

```javascript
import axios from 'axios';

export async function getData() {
  const response = await axios.get('https://api.example.com/data');
  return response.data;
}

// test file
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import axios from 'axios';
import { getData } from './file-being-tested';

const server = setupServer(
  rest.get('https://api.example.com/data', (req, res, ctx) => {
    return res(ctx.json({ foo: 'bar' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('getData returns expected data', async () => {
  const expectedData = { foo: 'bar' };

  const result = await getData();
  expect(result).toEqual(expectedData);
});
```

In this example, we're using `msw` to mock the API call. We define a mock server using `setupServer()` and use `rest.get()` to define the response for the API endpoint. We then use `server.listen()` to start the mock server before our tests run, and `server.close()` to stop it afterwards. Finally, we use `server.resetHandlers()` to reset the mock server between each test.

With these tools and techniques, you can effectively mock external dependencies in your Jest tests and ensure that your code is tested thoroughly and accurately.

# **Best Practices for Jest Testing**
Jest is a powerful testing framework, but writing effective tests can be challenging. Here are some best practices to keep in mind when writing tests with Jest:

## **Writing Readable and Maintainable Tests**
Tests should be easy to read and maintain. To achieve this, follow these guidelines:

- Keep test files short and focused on a single feature or scenario.
- Use descriptive test names that clearly describe what is being tested.
- Use comments to explain complex test logic or scenarios.
- Avoid duplicating test code. Use reusable functions or test fixtures instead.

## **Organizing Test Files and Folders**
Organizing test files and folders is important to keep your tests maintainable and easy to navigate. Here are some tips for organizing your test files and folders:

- Use a consistent naming convention for test files.
- Group tests into folders based on the module or feature being tested.
- Use a `__tests__` folder to keep test files separate from the main code.
- Use a `setupTests.js` file to set up global test configurations or utilities.

## **Writing Testable Code**
Writing testable code is essential for effective testing. To make your code more testable, follow these guidelines:

- Keep functions and components small and focused on a single task.
- Use dependency injection to make functions and components easier to test.
- Avoid using global state or side effects in functions or components.
- Make sure your code is modular and easy to understand.

## **Running Tests Frequently**
Running tests frequently is important to catch issues early and ensure that changes to the codebase do not introduce new bugs. Here are some tips for running tests frequently:

- Use a test runner like Jest to automate running tests.
- Set up continuous integration (CI) to automatically run tests on every code change.
- Use code coverage tools to ensure that your tests cover all code paths.
- Use performance testing tools to ensure that your tests run quickly and efficiently.

By following these best practices, you can write more effective tests and ensure that your code is well-tested and reliable.

## License

This project is licensed under the MIT License. For more information, please refer to the LICENSE file in this repository.
