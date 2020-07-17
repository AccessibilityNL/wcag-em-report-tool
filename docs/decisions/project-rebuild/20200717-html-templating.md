## HTML Templating - [2020/07/17]

### Decision to be Made

How to continue building the initial application starting with simple HTML. What is the best tech to use?


### Current Status

All options are open, we are starting from scratch. Previous application is build with AngularJS and has HTML files for templates.

These are connected with the application Framework and cannot be used as is due to framework specific syntax added on top. A different HTML template engine has to be chosen.

### Options

> Be sure to capture all relevant decisions, with an emphasis on the relevant part. This section is not to list every possible variation anyone could ever dream up. Instead, list genuine options that the decision makers could consider selecting. Depending upon the nature of your particular environment, you may want to include a section of “excluded options”. In this case, you would briefly list options that were quickly ruled out and a short statement of explanation.

> For each option, explain the option in detail first. Then, in bullet or similar quick-reference fashion, highlight the positives and negatives (I prefer the position of “Benefits” and “Risks”) of each option.

1. Parcel + PostHTML

  This option is using Parcel bundler which claims to be requiring no configuration itself. Just run the command and all should work. The nice thing here is it supports html files as entry which means Parcel checks the asset types included and also bundle those files. (JS, css)

  PostHTML is a HTML transformer, which takes (Post)HTML as input and returns modified html back. The nice thing about this is PostHTML has plugins to do just what you require to do and is not an all in one templating engine. If we would only extending other HTML than nothing else is required. All plugins are used like you would use a HTML element and combine nice with developer html tools like emmet.

2. Static Site Generator

  11ty + nunjucks expressive template language. Markdown support.

3. Static Site Generator + JS Library

  <!-- TODO Try react static > gatsby both with Preact -->

  react-static // Gatsby preact mode; if really sure this is required. But adds Javascript layer. Does adds eslint support which is good for JSX / HTML linting and error finding. HTML linters are not well developed for extensibility.

### Recommendation

> This is the recommendation of the team or individual submitting the decision document for consideration. It should include a reference back to the specific option being recommended (Option #1, 2 or 3…). In addition, the reasoning for this recommendation should be captured. For example, you should explain why the recommended option is better than others. Logic such as lowest overall risk or cost are obvious reasons. Others may include a balance of risk and costs or time sensitivity.

1. option 2; 11ty very easy setup and configuration is possible and easy too. Well documented and provides a possibility to move away from Ruby templating enging Jekyll (Github).

2. Option 3;

3. Option 1; Parcel makes it hard to choose your own folder setup which makes html templating harder.

### Decision

Rolling with option 2; Static Site Generator 11ty. Setting it up and starting with a first template was really smooth. Gave me quick results.

11ty will be used for quick html template setup.
We can change to another setup if required.

### Next Steps

1. When html templating will end, be done. it is good to give a look at SSG focussed on JS Library support. We might end up with a JS library for application functionality like routing and data management.

2. We should also start with style management. Preferably with PostCSS. Should decide how to grasp IE11 support for that in combination with the customizability of the application.

3. We should also look into Web Components integration for 11ty and react based SSG's (with Preact).
