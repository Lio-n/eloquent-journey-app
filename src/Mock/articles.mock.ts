import ArticleInfo from "@/models/article.model";

const MockArticleOne: ArticleInfo = {
  id: 1,
  title: "NodeJS 20 is HERE! 10 Features that will blow your mind 🤯",
  description:
    "<b>Written by <a href='https://medium.com/@Luna-Rojas/nodejs-20-is-here-10-features-that-will-blow-your-mind-a8673ed78da1'>Luna Rojas</a></b>",
  thumbnail: {
    url: "https://res.cloudinary.com/lio-n/image/upload/v1686696052/nodejs_20_tgmxvs.webp",
    name: "nvualLpbkf",
  },
  isPrivate: false,
  createdAt: "5 Jun 2023",
  time: 1685989281669,
  blocks: [
    { id: "l7Prk4Soau", type: "header", data: { text: "NodeJS 20 is HERE! 10 Features that will blow your mind 🤯", level: 1 } },
    {
      id: "5TvkzHv0M6",
      type: "paragraph",
      data: {
        text: '<b>Written by <a href="https://medium.com/@Luna-Rojas/nodejs-20-is-here-10-features-that-will-blow-your-mind-a8673ed78da1">Luna Rojas</a></b>',
      },
    },
    {
      id: "nvualLpbkf",
      type: "image",
      data: {
        file: {
          url: "https://res.cloudinary.com/lio-n/image/upload/v1686696052/nodejs_20_tgmxvs.webp",
        },
        caption: "",
        withBorder: false,
        stretched: false,
        withBackground: false,
      },
    },
    {
      id: "JeWF1nUrrq",
      type: "paragraph",
      data: {
        text: '<b>Written by <a href="https://medium.com/@Luna-Rojas/nodejs-20-is-here-10-features-that-will-blow-your-mind-a8673ed78da1">Luna Rojas</a></b>',
      },
    },
    { id: "c_1rML_bmb", type: "header", data: { text: "Introduction: Welcome to the Node.js 20 Party! 🎉", level: 4 } },
    {
      id: "sPcf6xvO6c",
      type: "paragraph",
      data: {
        text: "Fellow developers, prepare to be amazed! Node.js 20 has arrived, ushering in a new era of innovation and excitement. This groundbreaking release is slated to make its debut on April 18, 2023, and will ascend to Long-Term Support (LTS) status come October 2023, with ongoing support guaranteed until April 2026.",
      },
    },
    {
      id: "w9TNVDh7xD",
      type: "paragraph",
      data: {
        text: "So, are you ready to embark on a thrilling journey and uncover the game-changing features and updates that Node.js 20 has in store? Let’s dive in and get the lowdown on everything Node.js 20 has to offer!",
      },
    },
    { id: "QE7v7ZLJR4", type: "header", data: { text: "Node.js Permission Model: Your App’s Personal Bodyguard 💪", level: 4 } },
    {
      id: "QaNrZb2SME",
      type: "paragraph",
      data: {
        text: "You know how crucial it is to keep your app safe and sound, right? Well, Node.js 20 is here to help you do just that with the Permission Model, an experimental feature by Rafael Gonzaga that lets you restrict access to specific resources while your program is running.",
      },
    },
    {
      id: "pqdltDDOM8",
      type: "paragraph",
      data: { text: "To use this wicked feature, just enable the <b>--experimental-permission</b> flag, like this:" },
    },
    {
      id: "coZBJxQS-c",
      type: "paragraph",
      data: { text: "This will restrict access to all available permissions, so you can keep your app secure from any unwanted intruders. Sweet!" },
    },
    { id: "hGHWQYyf56", type: "header", data: { text: "Custom ESM Loader Hooks: Stability, Here We Come! 🚀", level: 4 } },
    {
      id: "KnMgrrXjb8",
      type: "paragraph",
      data: {
        text: "Tired of worrying about cross-contamination between loaders and application code? Well, worry no more! Custom hooks provided via loaders (<b>--experimental-loader=./foo.mjs</b>) now run on a dedicated thread, ensuring that everything stays neat and tidy.",
      },
    },
    { id: "ntAO9a_pkR", type: "paragraph", data: { text: "Here’s a quick example of how to use a custom loader:" } },
    { id: "SVwoTqPO6K", type: "paragraph", data: { text: "loader.mjs" } },
    {
      id: "X-_-Muqr3k",
      type: "code",
      data: {
        code: 'export async function resolve(specifier, parentModuleURL, defaultResolve) {\n  console.log("Resolving:", specifier);\n  return defaultResolve(specifier, parentModuleURL);\n}\n\nexport async function load(url, defaultLoad) {\n  console.log("Loading:", url);\n  return defaultLoad(url);\n}',
      },
    },
    { id: "rbOUBKb2IJ", type: "header", data: { text: "Miscellaneous: The Cherry on Top 🍒", level: 4 } },
    {
      id: "A5FkkcJVYE",
      type: "paragraph",
      data: {
        text: "Along with all the fantastic features we’ve covered, Node.js 20 also includes some other nifty updates to enhance your development experience:",
      },
    },
    {
      id: "LWHAq7A8by",
      type: "list",
      data: {
        style: "unordered",
        items: [
          "Faster startup times: Get your apps up and running in a flash.",
          "Improved TLS 1.3 support: Enjoy more robust cryptography for secure communications.",
          "Better TypeScript support: Write cleaner, more efficient code with TypeScript.",
        ],
      },
    },
    {
      id: "nUAS9T10SQ",
      type: "paragraph",
      data: {
        text: 'Check<b> <a href="https://nodejs.org/en/blog/announcements/v20-release-announce" target="_blank">Official Node.js 20 page</a></b> for more info.',
      },
    },
    {
      id: "memjNfnpRU",
      type: "paragraph",
      data: {
        text: '<b>Written by <a href="https://medium.com/@Luna-Rojas/nodejs-20-is-here-10-features-that-will-blow-your-mind-a8673ed78da1">Luna Rojas</a></b><br>',
      },
    },
  ],
};

const MockArticleTwo: ArticleInfo = {
  id: 2,
  title: "10 Javascript Interview Questions and Answers You Need to Know",
  description:
    "<b>Written by <a href='https://medium.com/@Luna-Rojas/nodejs-20-is-here-10-features-that-will-blow-your-mind-a8673ed78da1'>Luna Rojas</a></b>",
  thumbnail: {
    url: "https://res.cloudinary.com/lio-n/image/upload/v1686696122/1_e9UcoxOTbk15pGvXkyww_A_tifizn.webp",
    name: "EcMHdbYNpO",
  },
  isPrivate: false,
  createdAt: "5 Jun 2023",
  time: 1685989302709,
  blocks: [
    { id: "WPZX2a9EsV", type: "header", data: { text: "10 Javascript Interview Questions and Answers You Need to Know", level: 1 } },
    {
      id: "RwtxRhldem",
      type: "paragraph",
      data: {
        text: '<b>Written by <a href="https://medium.com/@Luna-Rojas/nodejs-20-is-here-10-features-that-will-blow-your-mind-a8673ed78da1">Luna Rojas</a></b>',
      },
    },
    {
      id: "EcMHdbYNpO",
      type: "image",
      data: {
        file: {
          url: "https://res.cloudinary.com/lio-n/image/upload/v1686696122/1_e9UcoxOTbk15pGvXkyww_A_tifizn.webp",
        },
        caption: "",
        withBorder: false,
        stretched: false,
        withBackground: false,
      },
    },
    {
      id: "n4kRi4gGSJ",
      type: "paragraph",
      data: {
        text: '<b>Written by <a href="https://medium.com/weekly-webtips/10-javascript-interview-questions-and-answers-you-need-to-know-16eace33df94">Luna Rojas</a></b>',
      },
    },
    {
      id: "B-NdubbRAl",
      type: "paragraph",
      data: {
        text: "Javascript skills are <b>extremely valuable</b> in the modern workforce, and they’re only becoming more so as the role of the internet becomes more and more important to our day-to-day lives.",
      },
    },
    {
      id: "zCumlE15v0",
      type: "paragraph",
      data: {
        text: "<b>If you want to be competitive in your job search</b>,\n knowing how to answer these javascript interview questions and \ncommunicating your knowledge effectively are two things you’ll need to \nfocus on.",
      },
    },
    {
      id: "mMNgoMo-ux",
      type: "paragraph",
      data: {
        text: "Below, I’ve covered 10 of the most important javascript interview questions that you should know how to answer if you want a <b>high-paying tech job</b>.",
      },
    },
    { id: "SXvvDTlSAQ", type: "header", data: { text: "What are the possible ways to create objects in JavaScript?", level: 4 } },
    { id: "cww1ERrq3M", type: "paragraph", data: { text: "There are many ways to create objects in javascript as below:" } },
    {
      id: "yb_FZXf0fO",
      type: "list",
      data: {
        style: "unordered",
        items: [
          "Object constructor: The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.",
        ],
      },
    },
    { id: "lLnXjRQYUK", type: "header", data: { text: "What is the Temporal Dead Zone?", level: 4 } },
    {
      id: "WcH2EX7tQ3",
      type: "paragraph",
      data: {
        text: "The\n Temporal Dead Zone is a behavior in JavaScript that occurs when \ndeclaring a variable with the let and const keywords, but not with var. \nIn ECMAScript 6, accessing a <b>let</b> or <b>const</b>\n variable before its declaration (within its scope) causes a \nReferenceError. The time span when that happens, between the creation of\n a variable’s binding and its declaration, is called the temporal dead \nzone.",
      },
    },
    { id: "ffvWbxBm_9", type: "paragraph", data: { text: "Let’s see this behavior with an example." } },
    {
      id: "bJLCqN64x0",
      type: "code",
      data: {
        code: "function somemethod() {\n  console.log(counter1); // undefined\n  console.log(counter2); // ReferenceError\n  var counter1 = 1;\n  let counter2 = 2;\n}",
      },
    },
    { id: "BfmHnUIvPJ", type: "header", data: { text: "What is a service worker?", level: 4 } },
    {
      id: "GlHrAL3tMp",
      type: "paragraph",
      data: {
        text: "A\n Service worker is basically a script (JavaScript file) that runs in the\n background, separate from a web page and provides features that don’t \nneed a web page or user interaction. Some of the major features of \nservice workers are Rich offline experiences(offline first web \napplication development), periodic background syncs, push notifications,\n intercept and handle network requests and programmatically managing a \ncache of responses.",
      },
    },
    { id: "bFx3-iV8jI", type: "header", data: { text: "What are the differences between cookie, local storage and session storage?", level: 4 } },
    {
      id: "Uio6mgcLrx",
      type: "paragraph",
      data: {
        text: "Local storage and session storage both provide a large memory capacity. To be more specific, <b>local Storage stores up to 10 megabytes and session storage stores up to 5 megabytes</b>. On the other hand, cookies provide a very restrictive and small storage capacity of 4 kilobytes.",
      },
    },
    {
      id: "cPdJ1kB1on",
      type: "paragraph",
      data: {
        text: '<b>Written by <a href="https://medium.com/weekly-webtips/10-javascript-interview-questions-and-answers-you-need-to-know-16eace33df94">Luna Rojas</a></b><br>',
      },
    },
  ],
};

const MockArticleThree: ArticleInfo = {
  blocks: [
    { id: "dppMxiEcXZ", type: "header", data: { text: "12 TypeScript tricks for Clean Code", level: 1 } },
    {
      id: "JFFSOmB2jJ",
      type: "paragraph",
      data: {
        text: '<b>Written by Marcos <a href="https://medium.com/@mvsg/12-typescript-tricks-for-clean-code-b23651dd0430">Vinicius Gouvea</a></b>',
      },
    },
    {
      id: "0wz8gdDjlX",
      type: "paragraph",
      data: {
        text: "We’ll explore twelve TypeScript tricks for writing clean code, with examples that demonstrate how they work and why they are useful. By using these tricks in your own TypeScript code, you can create more robust and maintainable applications that are easier to reason about and debug.",
      },
    },
    {
      id: "2Fkump1R71",
      type: "image",
      data: {
        file: {
          url: "https://res.cloudinary.com/lio-n/image/upload/v1686696216/1_moJeTvW97yShLB7URRj5Kg_r6l11g.webp",
        },
        caption: "",
        withBorder: false,
        stretched: false,
        withBackground: false,
      },
    },
    {
      id: "7ozbpQx_d6",
      type: "paragraph",
      data: {
        text: '<b>Written by Marcos <a href="https://medium.com/@mvsg/12-typescript-tricks-for-clean-code-b23651dd0430">Vinicius Gouvea</a></b>',
      },
    },
    {
      id: "8S0vLu39Dy",
      type: "paragraph",
      data: {
        text: "<b>1 — Use Type Annotations</b>:\n TypeScript is a statically-typed language, meaning that it allows you \nto define types for variables and functions. Using type annotations can \nhelp catch errors early in the development process and improve code \nreadability.",
      },
    },
    { id: "fCTSBkdqN_", type: "paragraph", data: { text: "Here are some examples of type annotations in TypeScript:" } },
    {
      id: "4L_Acnl4_E",
      type: "code",
      data: {
        code: "// Explicitly specify the data type of a variable\nlet count: number = 0;\n\n// Explicitly specify the data type of a function parameter and return value\nfunction addNumbers(a: number, b: number): number {\n  return a + b;\n}\n\n// Explicitly specify the data type of a class property\nclass Person {\n  name: string;\n  age: number;\n\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n\n  getDetails(): string {\n    return `${this.name} is ${this.age} years old.`;\n  }\n}",
      },
    },
    {
      id: "2ghnUH-49R",
      type: "paragraph",
      data: {
        text: "In\n these examples, we use type annotations to specify the data type of a \nvariable, function parameter, function return value, and class property.\n The type annotations are written after the variable, parameter, or \nproperty name, separated by a colon (:), followed by the desired data \ntype.",
      },
    },
    {
      id: "cEsXFUV_Zv",
      type: "paragraph",
      data: {
        text: "<b>2 — Use Enums:\n Enums</b> are a powerful feature of TypeScript that allows you to define a \nset of named constants. They can help make your code more readable and \nmaintainable, as well as reduce the likelihood of errors caused by magic\n numbers.",
      },
    },
    { id: "ntyT_-W6C7", type: "paragraph", data: { text: "Here’s an example of how enums can be used in TypeScript:" } },
    {
      id: "cML27KmWp6",
      type: "code",
      data: {
        code: 'enum Color {\n  Red = "RED",\n  Green = "GREEN",\n  Blue = "BLUE"\n}\n\nfunction printColor(color: Color): void {\n  console.log(`The color is ${color}`);\n}\n\nprintColor(Color.Red); // output: The color is RED',
      },
    },
    {
      id: "Pjwxt39UE_",
      type: "paragraph",
      data: {
        text: "In this example, we define an enum called <b>Colo</b>r that contains three named constants: <b>Red</b>,<b> Green</b>, and <b>Blue</b>. Each constant has an associated value, which can be a string or a number. We then define a function called <b>printColor</b> that takes a <b>Color</b> parameter and logs a message to the console using the parameter value.",
      },
    },
    {
      id: "b7b_l0nWao",
      type: "paragraph",
      data: {
        text: 'When we call the <b>printColor</b> function with the <b>Color.Red</b> constant as the parameter, it logs the message "The color is RED" to the console.',
      },
    },
    {
      id: "22dm7_NK8y",
      type: "paragraph",
      data: {
        text: "<b>3 — Use Optional Chaining</b>:\n Optional chaining is a TypeScript feature that allows you to safely \naccess nested properties and methods without worrying about whether the \nintermediate values are null or undefined. This can help reduce the \nlikelihood of runtime errors and make your code more robust.",
      },
    },
    { id: "s200a3hQFc", type: "paragraph", data: { text: "Here’s an example of how optional chaining can be used in TypeScript:" } },
    {
      id: "At2SU6hhL1",
      type: "code",
      data: {
        code: 'interface Person {\n  name: string;\n  address?: {\n    street: string;\n    city: string;\n    state: string;\n  };\n}\n\nconst person1: Person = {\n  name: "John",\n  address: {\n    street: "123 Main St",\n    city: "Anytown",\n    state: "CA",\n  },\n};\n\nconst person2: Person = {\n  name: "Jane",\n};\n\nconsole.log(person1?.address?.city); // output: Anytown\nconsole.log(person2?.address?.city); // output: undefined',
      },
    },
    {
      id: "qJzn7J_inL",
      type: "paragraph",
      data: {
        text: '<b>Written by Marcos <a href="https://medium.com/@mvsg/12-typescript-tricks-for-clean-code-b23651dd0430">Vinicius Gouvea</a></b><br>',
      },
    },
  ],
  time: 1685989320585,
  title: "12 TypeScript tricks for Clean Code",
  description: '<b>Written by Marcos <a href="https://medium.com/@mvsg/12-typescript-tricks-for-clean-code-b23651dd0430">Vinicius Gouvea</a></b>',
  isPrivate: false,
  thumbnail: {
    name: "2Fkump1R71",
    url: "https://res.cloudinary.com/lio-n/image/upload/v1686696216/1_moJeTvW97yShLB7URRj5Kg_r6l11g.webp",
  },
  createdAt: "5 Jun 2023",
  id: 3,
};

const MockArticleFour: ArticleInfo = {
  blocks: [
    { id: "aCe9xGuZaM", type: "header", data: { text: "Understanding Server Components in React 18 and Next.js 13", level: 1 } },
    {
      id: "vlWKf7GW5u",
      type: "paragraph",
      data: {
        text: '<b>Written by <a href="https://adhithiravi.medium.com/what-are-server-components-and-client-components-in-react-18-and-next-js-13-6f869c0c66b0">Adhithi Ravichandran</a></b>',
      },
    },
    {
      id: "zAQ_c3W4In",
      type: "image",
      data: {
        file: {
          url: "https://res.cloudinary.com/lio-n/image/upload/v1686696276/1_aF1u1vDDft_pzrZ0SlLRuw_nsjvpj.webp",
        },
        caption: "",
        withBorder: false,
        stretched: false,
        withBackground: false,
      },
    },
    {
      id: "_LPwkWXgz-",
      type: "paragraph",
      data: {
        text: '<b>Written by <a href="https://adhithiravi.medium.com/what-are-server-components-and-client-components-in-react-18-and-next-js-13-6f869c0c66b0">Adhithi Ravichandran</a></b>',
      },
    },
    {
      id: "WvDdQo2GB3",
      type: "paragraph",
      data: {
        text: 'With the release of <a href="https://beta.nextjs.org/docs" target="_blank">Next.js 13</a>, they have a new /app directory that has newer approaches to data rendering, fetching, and also uses the latest React Server Components.',
      },
    },
    { id: "SznKa0e60_", type: "paragraph", data: { text: "<i>Note that the /app folder in Next.js 13 is still in Beta.</i>" } },
    { id: "TM2Z2LYGt_", type: "header", data: { text: "What is Rendering?", level: 4 } },
    {
      id: "FnwO5BQMnm",
      type: "paragraph",
      data: {
        text: "Rendering\n converts the code that you write into user interfaces that the user \ninteracts with. With React 18 and Next.js 13 there is a complete shift \nin how you can render React code.",
      },
    },
    {
      id: "J7utuUaZpS",
      type: "paragraph",
      data: {
        text: "Let’s\n revisit some terms and definitions before we understand the new \nrendering mechanisms with Next.js 13. Here is a quick recap.",
      },
    },
    { id: "KMSTd2qImA", type: "header", data: { text: "Client", level: 4 } },
    {
      id: "MbFUaurNms",
      type: "paragraph",
      data: {
        text: "The\n client refers to the browser on a user’s device, that sends a request \nto a server for your application code. It then turns the response from \nthe server into an interface that the user can interact with.",
      },
    },
    { id: "tnTCZXQ0-8", type: "header", data: { text: "Server", level: 4 } },
    {
      id: "f4JLHpgQet",
      type: "paragraph",
      data: {
        text: "The\n server refers to the computer in a data center that stores your \napplication code, receives request from the client, does some \ncomputation, and sends back an appropriate response.",
      },
    },
    { id: "1B7HqxiwU0", type: "paragraph", data: { text: "Got it! Tell me more.." } },
    { id: "NOMgDaD-uw", type: "header", data: { text: "Client Components", level: 4 } },
    {
      id: "j7jzzm-Z9c",
      type: "paragraph",
      data: {
        text: "Client\n Components are rendered on the client. In Next.js, client components \ncan also be pre-rendered on the server and hydrated on the client.",
      },
    },
    {
      id: "woU_n4blT7",
      type: "paragraph",
      data: {
        text: "To use a Client Component in Next.js, create a file inside <i>/app</i> and add the ‘<i>use client</i>’ directive at the top of the file, before any imports.",
      },
    },
    {
      id: "UNHoW3wbbF",
      type: "paragraph",
      data: {
        text: '<b>Written by <a href="https://adhithiravi.medium.com/what-are-server-components-and-client-components-in-react-18-and-next-js-13-6f869c0c66b0">Adhithi Ravichandran</a></b><br>',
      },
    },
  ],
  time: 1685989535891,
  title: "Understanding Server Components in React 18 and Next.js 13",
  description:
    '<b>Written by <a href="https://adhithiravi.medium.com/what-are-server-components-and-client-components-in-react-18-and-next-js-13-6f869c0c66b0">Adhithi Ravichandran</a></b>',
  isPrivate: false,
  thumbnail: {
    name: "zAQ_c3W4In",
    url: "https://res.cloudinary.com/lio-n/image/upload/v1686696276/1_aF1u1vDDft_pzrZ0SlLRuw_nsjvpj.webp",
  },
  createdAt: "5 Jun 2023",
  id: 4,
};

const MockArticleFive: ArticleInfo = {
  blocks: [
    { id: "0gq1R7BfrZ", type: "header", data: { text: "Stop using “return null” in React", level: 1 } },
    {
      id: "MTT93q12yQ",
      type: "paragraph",
      data: { text: '<b>Written by <a href="https://medium.com/@davidkelley87/stop-using-return-null-in-react-a2ebf08fc9cd">David</a></b>' },
    },
    {
      id: "UDfPYMtV9O",
      type: "image",
      data: {
        file: {
          url: "https://res.cloudinary.com/lio-n/image/upload/v1686696344/1_ZUzsbx5Gg0nVaUuxHqnz_A_wc2lbv.webp",
        },
        caption: "",
        withBorder: false,
        stretched: false,
        withBackground: false,
      },
    },
    {
      id: "0mGjbSfVs9",
      type: "paragraph",
      data: { text: '<b>Written by <a href="https://medium.com/@davidkelley87/stop-using-return-null-in-react-a2ebf08fc9cd">David</a></b>' },
    },
    {
      id: "ICyhIInNFI",
      type: "paragraph",
      data: {
        text: "When working with React, it’s important to understand the implications of the values returned from components. While it may be tempting to use <b>return null</b> to indicate that a component should not render anything, this can actually have unintended consequences. In this post, we'll explore why using <b>return null</b> from React components is considered bad practice and why <b>return false</b> is a better alternative.",
      },
    },
    { id: "lXgV-Fm3YZ", type: "header", data: { text: 'The Problem with “return null"', level: 4 } },
    {
      id: "ka2JEuM334",
      type: "paragraph",
      data: {
        text: "The primary issue with using <b>return null </b>in a component is that it can cause unexpected behavior in the application. Specifically, <b>null</b>\n is treated by React as a valid value to render, and it can cause the \ncomponent's children to become disconnected from the tree. This can \nresult in a variety of issues, such as unexpected re-renders or state \ninconsistencies.",
      },
    },
    {
      id: "PbFmX3oDxK",
      type: "paragraph",
      data: {
        text: "To\n understand why this happens, it’s helpful to know a bit about how React\n works under the hood. When a component is rendered, React creates a \nvirtual DOM tree that represents the current state of the UI. This tree \nis then compared to the previous tree to determine which parts of the UI\n need to be updated. If a component returns <b>null</b>,\n it effectively tells React that it doesn't need to render anything at \nall. However, this can cause problems when the component's children have\n state or props that need to be updated.",
      },
    },
    {
      id: "Q-kV7e-4xV",
      type: "paragraph",
      data: {
        text: "In this example, the<b> Child</b> component uses <b>return null</b> to indicate that it should not render anything if <b>count </b>is equal to 0. However, this can cause problems if the <b>Child</b> component is ever rerendered with a non-zero value of <b>count</b>. In this case, React will need to reconnect the <b>Child</b> component to the tree, which can cause unexpected behaviour.",
      },
    },
    { id: "oeCNxgLI1-", type: "header", data: { text: 'The Benefits of "return false"', level: 4 } },
    {
      id: "LX7TANy94a",
      type: "paragraph",
      data: {
        text: "Instead of using <b>return null</b>, a better approach is to use <b>return false</b>. When a component returns<b> false</b>, React treats it as if it had returned <b>null</b>,\n but it also tells React not to render any of the component's children. \nThis ensures that the component and its children remain connected to the\n tree, avoiding the issues that can arise from using <b>return null</b>.",
      },
    },
    {
      id: "z1QQokM1v7",
      type: "paragraph",
      data: {
        text: "In this version, the <b>Child</b> component returns <b>false</b> instead of <b>null </b>when <b>count </b>is equal to 0. This ensures that the component and its children remain connected to the tree, even when the component doesn't need to render anything. As a result, the component will behave more predictably and avoid the issues that can arise from using <b>return null</b>.",
      },
    },
    { id: "-21ZLj0iGQ", type: "header", data: { text: "", level: 2 } },
    {
      id: "P_Tb6kDoyk",
      type: "paragraph",
      data: { text: '<b>Written by <a href="https://medium.com/@davidkelley87/stop-using-return-null-in-react-a2ebf08fc9cd">David</a></b><br>' },
    },
  ],
  time: 1685989844666,
  title: "Stop using “return null” in React",
  description: '<b>Written by <a href="https://medium.com/@davidkelley87/stop-using-return-null-in-react-a2ebf08fc9cd">David</a></b>',
  isPrivate: false,
  thumbnail: {
    name: "UDfPYMtV9O",
    url: "https://res.cloudinary.com/lio-n/image/upload/v1686696344/1_ZUzsbx5Gg0nVaUuxHqnz_A_wc2lbv.webp",
  },
  createdAt: "5 Jun 2023",
  id: 5,
};

const MockArticleSix: ArticleInfo = {
  blocks: [
    {
      id: "xPoKOSa_s6",
      type: "header",
      data: {
        text: "Geralt of Rivia",
        level: 2,
      },
    },
    {
      id: "FDy0jn3pZH",
      type: "image",
      data: {
        file: {
          url: "https://res.cloudinary.com/lio-n/image/upload/v1686695630/Geralt_1_auzqsi.png",
        },
        caption: "",
        withBorder: false,
        stretched: false,
        withBackground: false,
      },
    },
    {
      id: "upvRCEp4-L",
      type: "paragraph",
      data: {
        text: '<b>Geralt of Rivia</b> was a legendary <a href="https://witcher.fandom.com/wiki/Witcher">witcher</a> of the <a href="https://witcher.fandom.com/wiki/School_of_the_Wolf">School of the Wolf</a> active throughout the 13th century. He loved the <a href="https://witcher.fandom.com/wiki/Sorceress">sorceress</a> <a href="https://witcher.fandom.com/wiki/Yennefer_of_Vengerberg">Yennefer</a>, considered the love of his life despite their tumultuous relationship, and became <a href="https://witcher.fandom.com/wiki/Ciri">Ciri</a>\'s adoptive father.\n',
      },
    },
    {
      id: "_lUFDdZDlg",
      type: "paragraph",
      data: {
        text: 'During the <a href="https://witcher.fandom.com/wiki/Trial_of_the_Grasses">Trial of the Grasses</a>, Geralt exhibited unusual tolerance for the <a href="https://witcher.fandom.com/wiki/Mutagens">mutagens</a>\n that grant witchers their abilities. Accordingly, Geralt was subjected \nto further experimental mutagens which rendered his hair white and may \nhave given him greater speed, strength, and <a href="https://witcher.fandom.com/wiki/Stamina">stamina</a> than his fellow witchers.\n',
      },
    },
    {
      id: "sSBtmNUV0C",
      type: "image",
      data: {
        file: {
          url: "https://res.cloudinary.com/lio-n/image/upload/v1686696570/jpeg_antmoh.jpg",
        },
        caption: "",
        withBorder: false,
        stretched: false,
        withBackground: false,
      },
    },
    {
      id: "rJL_x0S-UU",
      type: "paragraph",
      data: {
        text: 'Despite his title, Geralt did not hail from the city of <a href="https://witcher.fandom.com/wiki/Rivia_(city)">Rivia</a>. After being left with the witchers by his mother, <a href="https://witcher.fandom.com/wiki/Visenna">Visenna</a>, he grew up in their keep of <a href="https://witcher.fandom.com/wiki/Kaer_Morhen">Kaer Morhen</a> in the realm of <a href="https://witcher.fandom.com/wiki/Kaedwen">Kaedwen</a>.\n In the interest of appearing more trustworthy to potential clients, \nyoung witchers were encouraged to make up surnames for themselves by \nmaster <a href="https://witcher.fandom.com/wiki/Vesemir">Vesemir</a>.\n As his first choice, Geralt chose "Geralt Roger Eric du \nHaute-Bellegarde", but this choice was dismissed by Vesemir as silly and\n pretentious, so "Geralt" was all that remained of his chosen name. "Of \nRivia" was a more practical alternative and Geralt even went so far as \nto adopt a Rivian accent to appear more authentic. Later, <a href="https://witcher.fandom.com/wiki/Queen">Queen</a> <a href="https://witcher.fandom.com/wiki/Meve">Meve</a> of <a href="https://witcher.fandom.com/wiki/Lyria">Lyria</a> knighted him for his valor in the <a href="https://witcher.fandom.com/wiki/Battle_for_the_Bridge_on_the_Yaruga">Battle for the Bridge on the Yaruga</a> conferring on him the formal title "of Rivia", which amused him.<a href="https://witcher.fandom.com/wiki/Geralt_of_Rivia#cite_note-bof-2">[1]</a> He, therefore, became a true <a href="https://witcher.fandom.com/wiki/Knight">knight</a>.\n',
      },
    },
    {
      id: "6hESTEDEkM",
      type: "paragraph",
      data: {
        text: 'Source : <b><a href="https://witcher.fandom.com/wiki/Geralt_of_Rivia">Witcher Wiki</a></b><br>',
      },
    },
  ],
  time: 1686696782137,
  title: "Geralt of Rivia",
  description:
    '<b>Geralt of Rivia</b> was a legendary <a href="https://witcher.fandom.com/wiki/Witcher">witcher</a> of the <a href="https://witcher.fandom.com/wiki/School_of_the_Wolf">School of the Wolf</a> active throughout the 13th century. He loved the <a href="https://witcher.fandom.com/wiki/Sorceress">sorceress</a> <a href="https://witcher.fandom.com/wiki/Yennefer_of_Vengerberg">Yennefer</a>, considered the love of his life despite their tumultuous relationship, and became <a href="https://witcher.fandom.com/wiki/Ciri">Ciri</a>\'s adoptive father.\n',
  isPrivate: false,
  thumbnail: {
    name: "FDy0jn3pZH",
    url: "https://res.cloudinary.com/lio-n/image/upload/v1686695630/Geralt_1_auzqsi.png",
  },
  createdAt: "13 Jun 2023",
  id: 6,
};

const MockArticlesHits: ArticleInfo[] = [MockArticleOne, MockArticleTwo, MockArticleThree, MockArticleFour, MockArticleFive, MockArticleSix];

const MockEmptyArticlesState: ArticleInfo[] = [];
export { MockEmptyArticlesState };
export default MockArticlesHits;
