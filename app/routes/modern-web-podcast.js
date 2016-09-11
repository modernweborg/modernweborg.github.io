import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      podcasts: [{
        type: 'youtube',
        id: 'N-lfi9DumlM',
        vanity: 's03e09-babili-babeljs-flow',
        title: 'S03E09 - Introducing Babili, Babels New Minifier and some Flow (React Rally Edition)',
        description: 'We interview Henry Zhu (@left_pad) on babels new minifier - babili. Babili is a minifier based on the babel toolchain. They discuss how babili might minify bananas and power rangers, the babel plugin - emojification, how Sebastian McKenzie once blocked Jay Phelps on twitter, why babili is important for the JS ecosystem, flow and using babel with flow, contributing to interesting open source projects, bit manipulation languages, and TrumpScript.',
        presenters: [{
          name: 'Henry Zhu',
          twitter: 'left_pad'
        }, {
          name: 'Ben Lesh',
          twitter: 'benlesh'
        }, {
          name: 'Jay Phelps',
          twitter: '_jayphelps'
        }]
      }, {
        type: 'youtube',
        id: 'PUG5AqBD3T4',
        vanity: 's03e08-oss-contributions-conference-talks',
        title: 'S03E08 - Your First Contribution to OSS and Conference Talks (React Rally Edition)',
        description: 'Raquel Moss (@raquelxmoss), Kent C. Dodds (@kentcdodds), and Ben Lesh (@benlesh) sit down at React Rally to discuss the conference, what makes for a good presentation, and how to feel comfortable speaking at conferences. Kent shows us how to do air squats before they discuss Raquel’s recent contribution to CycleJS core, beginner contributions to open source, tips on how to think about your first contributions, and the benefits of ReactJS.',
        presenters: [{
          name: 'Raquel Moss',
          twitter: 'raquelxmoss'
        }, {
          name: 'Ben Lesh',
          twitter: 'benlesh'
        }, {
          name: 'Kent C. Dodds',
          twitter: 'kentcdodds'
        }]
      }, {
        type: 'youtube',
        id: 'KDOTbvey-jI',
        vanity: 's03e07-reactjs-tc39-cancellable-promises-nodejs',
        title: 'S03E07 - React, Node, TC39, Cancellable Promises, and Observables, Oh My! (React Rally Edition)',
        description: 'Tracy Lee interviews Ben Lesh at React Rally. They discuss the React community compared to other JavaScript communities, which they boil down to being very similar to a “choose-your-own-adventure”. Important things to note in this podcast: The benefits and costs of new ES2015 features, Node’s position in the JavaScript ecosystem and how TC39 standards are affecting the node ecosystem, senior developers mentoring and making junior developers feel comfortable, the promises spec and cancellation tokens with observables. Other topics: how React trainings differ from Angular or Ember trainings, the new create-react-app and why it’s so amazing, the new screencast site Yolobrolo, and why @godtributes is the most amazing twitter bot ever. Ben also might have said that Dan Abramov is a React superstar, but you’ll have to listen to be sure. Tracy called out Ben on not wearing the hat that Sam Saccone’s mother purchased him.',
        presenters: [{
          name: 'Tracy Lee',
          twitter: 'ladyleet'
        }, {
          name: 'Ben Lesh',
          twitter: 'benlesh'
        }]
      }, {
        type: 'youtube',
        id: '9qvqpHXDRRQ',
        vanity: 's03e06-react-router-history-js-state',
        title: 'S03E06 - React Router, HistoryJS, State Management, Webpack vs Rollup, and more (React Rally)',
        description: 'Michael Jackson, Stephen Rivas Jr, and Jay Phelps discuss React and other front end frameworks at React Rally. Topics covered: Create-react-app - How using ember prior to react has affected the thinking behind working on react - React trainings - Building complex react apps - Webpack vs Rollup - HistoryJS (react history) - How you should approach open source projects - React Router v4 - Early mistakes in the early router - Previews some of the changes happening with react router and react history -Integration of redux with react router and react history - React Router 4 - State management in react.',
        presenters: [{
          name: 'Michael Jackson',
          twitter: 'mjackson'
        }, {
          name: 'Stephen Rivas Jr.',
          twitter: 'sprjrx'
        },{
          name: 'Jay Phelps',
          twitter: '_jayphelps'
        }]
      }, {
        type: 'youtube',
        id: 'hozpCdvObA0',
        vanity: 's03e05-open-sourcery-react-community',
        title: 'S03E05 - Open Sourcery and The React Community (React Rally Edition)',
        description: 'Modern Web sits down with Devon Lindsey (@devonbl), Sarah Drasner (@sarah_edo), James Kyle (@thejameskyle), and Katherine Poulter (@katpoulter) at React Rally (@reactrally). Our main goal was to put them in power ranger outfits. Watch as they discuss the benefits of being an individual technical contributor versus taking the management route. The four share their views on the excitement of being a JavaScript developer, learning new technologies and how the trend of openly sharing code has helped speed up the evolution of OSS and technology. Other topics discussed are companies giving engineers time for open source projects, how awesome the React community is at being nice to each other, and how conferences help you get to know community leaders better.',
        presenters: [{
          name: 'Devon Lindsey',
          twitter: 'devonbl'
        }, {
          name: 'Katherine Poulter',
          twitter: 'katpoulter'
        },{
          name: 'Sarah Drasner',
          twitter: 'sarah_edo'
        }, {
          name: 'James Kyle',
          twitter: 'thejameskyle'
        }]
      }, {
        type: 'podbean',
        id: 'cnast-626357',
        vanity: 's03e04-thepracticaldev',
        title: 'S03E04 - The Truth Behind The Practical Dev',
        description: 'We interview Ben Halpern, the voice behind the famous twitter handle, @ThePracticalDev. Did you know you can tweet The Practical Dev about your javascript homework? This podcast gives us a fun and quick view into what its like behind the scenes as The Practical Dev. Learn about the organization and its the future. Hear stories about run-ins with Tim OReilly, the JavaScript community, and how why Sebastian McKenzie once blocked Jay Phelps on Twitter. Hint It was Sam Saccones fault.',
        presenters: [{
          name: 'Ben Halpern',
          twitter: 'thepracticaldev'
        }, {
          name: 'Ben Lesh',
          twitter: 'benlesh'
        },{
          name: 'Tracy Lee',
          twitter: 'ladyleet'
        }],
        imageURL: '/img/podcasts/modern-web-play-button.jpg'
      }, {
        type: 'podbean',
        id: 'wngjr-613eed',
        vanity: 's03e03-authentication-authorization-emberjs',
        title: 'S03E03 - Authorization vs Authentication in Ember with Rock ‘n Roll Ember',
        description: 'In this podcast episode, Taras Mankovski, aka EmberSherpa, interviews Balint Erdi, the author of Rock and Roll with Ember about authentication and authorization in Ember applications. They discuss common authentication strategies and how to implement them with addons like Ember Simple Auth and Torii.',
        presenters: [{
          name: 'Balint Erdi',
          twitter: 'baaz'
        }, {
          name: 'Taras Mankovski',
          twitter: 'embersherpa'
        }],
        imageURL: '/img/podcasts/modern-web-play-button.jpg'
      }, {
        type: 'podbean',
        id: 'zhrxa-610f07',
        vanity: 's03e02-d3-solutions-in-emberjs',
        title: 'S03E02 - D3 Solutions in Ember and Composable Helpers',
        description: 'Ivan Vanderbyl (Co-Founder, flood.io) and Taras Mankovski (Founder, EmberSherpa), 2 Ember developers have a discussion around D3 in Ember and the solutions they have been working on to make graphing easier with the framework using add-ons. Ivan and Taras have been working on separate D3 ember solutions - ember-d3-helpers and maximum plaid. This podcast illustrates how separate projects solving the same problems in a community can converge and move towards a common solution. Discussion revolves around using composable helpers and creating solutions on an atomic level that can be used to solve problems across various unrelated matters.',
        presenters: [{
          name: 'Ivan Vanderbyl',
          twitter: 'ivanderbyl'
        }, {
          name: 'Taras Mankovski',
          twitter: 'embersherpa'
        }],
        imageURL: '/img/podcasts/modern-web-play-button.jpg'
      }, {
        type: 'podbean',
        id: '2f332-610f18',
        vanity: 's03e01-react-community-evolution',
        title: 'S3E01 - The Evolution of the React Community & React Rally',
        description: 'Ben Lesh and Tracy Lee interview Zabriskies Beard and Jamison Dance on the accidental creation of React Rally, how the JavaScript framework communities are organically formed based on the strength of the frameworks opinions and exploration into why the react community exists in the form that it does. Also discussed are Power Rangers fighting bananas at React Rally, how redux is pushing the envelope for react developers to solve harder problems, and discussing the possibilities of a future react cli.',
        presenters: [{
          name: 'Ben Lesh',
          twitter: 'benlesh'
        }, {
          name: 'Tracy Lee',
          twitter: 'ladyleet'
        }, {
          name: 'Matt Zabriskie',
          twitter: 'mzabriskie'
        }, {
          name: 'Jamison Dance',
          twitter: 'jergason'
        }],
        imageURL: '/img/podcasts/modern-web-play-button.jpg'
      }, {
        type: 'youtube',
        id: 'uqYK_xDmafA',
        vanity: 's02e09-angular-2',
        title: 'S02E09 - How Angular 2 is Changing the Way Developers Think about JavaScript',
        description: 'Since Angular 2, the demand for Angular training has increased dramatically. Bill and Zack discuss how Angular 2s use of TypeScript has changed the perspective of JavaScript to .net and java developers and the gratification of teaching JavaScript to new and experienced developers. Bill talks about the contrast between teaching Angular1x and Angular 2, how angular-cli is changing the way developers think about JavaScript, and how the greater whole of the AngularJS teaching community works together to support each other.',
        presenters: [{
          name: 'Bill Odom',
          twitter: 'wnodom'
        }, {
          name: 'Zack Chapple',
          twitter: 'zchapple'
        }]
      }, {
        type: 'youtube',
        id: 'vpy53pQU4yk',
        vanity: 's02e08-contributing-to-oss',
        title: 'S02E08 - Contributing to Open Source - A Discussion with Ben Lesh and Zack Chapple',
        description: 'In this episode we explore contributing to the open source community, dos and donts for a beginner, and get the perspective of two well seasoned OSS contributors Ben Lesh and Zack Chapple. You can follow Ben Lesh @benlesh, Zack Chapple @zchapple, and Tracy Lee @ladyleet on Twitter.',
        presenters: [{
          name: 'Tracy Lee',
          twitter: 'ladyleet'
        }, {
          name: 'Ben Lesh',
          twitter: 'benlesh'
        }, {
          name: 'Zack Chapple',
          twitter: 'zchapple'
        }]
      }, {
        type: 'podbean',
        id: 'nd5md-60b952',
        vanity: 's02e07-accessibility-in-emberjs',
        title: 'S02E07 - Accessibility for the web. Meet these dedicated ember.js community members',
        description: 'In this podcast episode, we speak to a strong and dedicated set of the ember.js community focused on making accessibility better for the web. Making the web accessible is one of the biggest challenges for developers. Luckily, standards bodies have quickly moved to adapt and make necessary changes to improve the experience for us. We speak to Nathan Hammond @nathanhammond, Suz Hinton @noopkat, Jamie White @jgwhite, Ben Holmes @binhums, George Chapman @gnchampman, and Robert DeLuca @robdel12 on their passion and the driving force behind this effort. Topics covered: What does accessibility look like in ember and single page applications in general? Why open source community members are passionate about accessibility on the web. How the ember community has come together through making the web more accessible through creating useful ember add ons within the community. What are the easy and difficult things about accessibility. How html5 has enabled accessibility by default. How many companies should start thinking about the power of being accessible by default. How large teams like Kickstarter start incorporating accessibility into their process, even during the design phase. Building accessibility into your continuous integration flow. What you should be investing in as a developer.',
        presenters: [{
          name: 'Nathan Hammond',
          twitter: 'nathanhammond'
        }, {
          name: 'Jamie White',
          twitter: 'jgwhite'
        }, {
          name: 'Suz Hinton',
          twitter: 'noopkat'
        }, {
          name: 'Ben Holmes',
          twitter: 'binhums'
        }, {
          name: 'George Chapman',
          twitter: 'gnchapman'
        }, {
          name: 'Robert DeLuca',
          twitter: 'robdel12'
        }],
        imageURL: '/img/podcasts/modern-web-play-button.jpg'
      }, {
        type: 'podbean',
        id: 'dxxtf-6094e3',
        vanity: 's02e06-ionic-2',
        title: 'S02E06 - Ionic2 Status Update with Ionic Team members Brandy Carney and Adam Bradley',
        description: 'In this podcast episode, we speak to Brandy Carney and Adam Bradley of the Ionic2 framework, whats coming down the pipeline, the Ionic CLI, what the integration with Angular 2 is shaping up to look like, and how they feel about Jeff Cross beard and David Easts ollie skills. Follow Brandy Carney (@brandyscarney), Adam Bradley (@adamdbradley), Ben Lesh (@benlesh), and myself Tracy Lee (@ladyleet) on Twitter for more JavaScript fun.',
        presenters: [{
          name: 'Ben Lesh',
          twitter: 'benlesh'
        }, {
          name: 'Brandy Carney',
          twitter: 'brandyscarney'
        }, {
          name: 'Adam Bradley',
          twitter: 'adamdbradley'
        }, {
          name: 'Tracy Lee',
          twitter: 'ladyleet'
        }],
        imageURL: '/img/podcasts/modern-web-play-button.jpg'
      }, {
        type: 'youtube',
        id: 'hx6qAbpYwdQ',
        vanity: 's02e04-laughter-at-conferences',
        title: 'S02E04 - Bringing Laughter and Excitement to Conferences and How to be a Better Speaker',
        description: 'In this special episode, Ben and Shai crawl into bed together dressed as dinosaurs and talk about his career as a comedian, how hes bringing laughter and excitement to the Angular community, and give advice to developers for speaking at conferences.',
        presenters: [{
          name: 'Ben Lesh',
          twitter: 'benlesh'
        }, {
          name: 'Shai Reznik',
          twitter: 'shai_reznik'
        }]
      }, {
        type: 'youtube',
        id: 'EVGEOgfB2Zg',
        vanity: 's02e03-angular-cli',
        title: 'S02E03 - The Direction of Angular CLI with Hans Larsen',
        description: 'Ben Lesh and Zack Chapple interview Hans Larsen on Angular CLI and the future of this awesome tool at Ng-conf.',
        presenters: [{
          name: 'Ben Lesh',
          twitter: 'benlesh'
        }, {
          name: 'Zack Chapple',
          twitter: 'zchapple'
        }, {
          name: 'Hans Larsen',
          twitter: 'hanslatwork'
        }]
      }, {
        type: 'youtube',
        id: '65-WwVfAcl8',
        vanity: 's02e02-promise-cancellation',
        title: 'S02E02 - A Debate about Promise Cancellation with Sam Saccone and Ben Lesh',
        description: 'In this Modern Web episode, Ben Lesh and Sam Saccone engage in a friendly debate on the merits of cancellable promises. They explore pros and cons of promises and how they trap errors in Node.js.',
        presenters: [{
          name: 'Ben Lesh',
          twitter: 'benlesh'
        }, {
          name: 'Sam Saccone',
          twitter: 'samccone'
        }]
      }, {
        type: 'youtube',
        id: 'ePG97JCC7dY',
        title: 'S02E01 - The Jeff Cross & Alex Eagle Dino Show on Modern Web with Ben Lesh',
        vanity: 's02e01-alex-eagle-jeff-cross-show',
        description: 'In this episode filmed at #ngconf, Jeff Cross and fight over Ben Lesh and his awesomeness while wearing dino hoodies. The show begins with an angularjs tattoo branding of The Ben Lesh, then moves on to conversations around last minute bundling decisions for the Angular 2 RC and when RxJS will be incorporated in.',
        presenters: [{
          name: 'Jeff Cross',
          twitter: 'jeffbcross'
        }, {
          name: 'Alex Eagle',
          twitter: 'jakeherringbone'
        }, {
          name: 'Ben Lesh',
          twitter: 'benlesh'
        }]
      }, {
        type: 'podbean',
        id: 'nb2pd-5ef1c7',
        vanity: 's01e12-broccoli-pr',
        title: 'S01E12 - Munchies and a Pull Request - Broccoli and Angular-CLI',
        description: 'In this podcast episode, we speak to Mike Brocchi with Jeremy Rowe about angular-cli. Mike is one of the contributors on the angular-cli team. His nickname is Broccoli, which is the most important part of this podcast.',
        presenters: [{
          name: 'Mike Brocchi',
          twitter: 'brocco'
        }, {
          name: 'Jeremy Rowe',
          twitter: 'jeremy_w_rowe'
        }],
        imageURL: '/img/podcasts/modern-web-play-button.jpg'
      }, {
        type: 'podbean',
        id: 't5c3d-5f1c25',
        vanity: 's01e11-toran-b-tdd',
        title: 'S01E11 - A Practical Approach to TDD, BDD, and Various Testing Buzzwords',
        description: 'In this podcast episode, we speak to Mike Brocchi about angular-cli. Mike is one of the contributors on the angular-cli team. His nickname is Broccoli, which is the most important part of this podcast.',
        presenters: [{
          name: 'Mike Brocchi',
          twitter: 'brocco'
        }],
        imageURL: '/img/podcasts/modern-web-play-button.jpg'
      }, {
        type: 'podbean',
        id: 'rq34k-5e4fdb',
        vanity: 's01e10-functional-programming',
        title: 'S01E10 - Ride the Functional Programming Wave with Cowboyd',
        description: 'In this podcast episode, Jeffrey Biles of Ember Screencasts interviews Charles Lowell ride the functional programming wave and dive into what this actually means.\nTopics covered range from how to think about MVC, moving logic out of controllers and components and into the template, functional programming in ember, the rise of helpers, addons such as ember-composabe-helpers and ember-curry-helpers, and the universal UI workflow.',
        presenters: [{
          name: 'Jeffrey Biles',
          twitter: 'jeffreybiles'
        }, {
          name: 'Charles Lowell',
          twitter: 'cowboyd'
        }],
        imageURL: '/img/podcasts/modern-web-play-button.jpg'
      }, {
        type: 'podbean',
        id: 'sstip-5e4fc4',
        vanity: 's01e09-rxjs5-podcastwysocki',
        title: 'S01E09 - Podcastwysocki - RxJS Banter with Matt Podwysocki and Ben Lesh',
        description: 'In S01E09, Matt Podwysocki speaks to Ben Lesh about Rx.',
        presenters: [{
          name: 'Matt Podwysocki',
          twitter: 'mattpodwysocki'
        }, {
          name: 'Ben Lesh',
          twitter: 'benlesh'
        }],
        imageURL: '/img/podcasts/modern-web-play-button.jpg'
      }, {
        type: 'youtube',
        vanity: 'fluentconf-javascript-good-days',
        id: 'rMbL1w-Bby4',
        title: 'FluentConf Special (Part 2 of 2) - JavaScript 2016 and "The Good \'Ol Days of the Internet"',
        description: 'An impromptu get together with Ben Lesh,Matt Podwysocki, Jay Phelps, Victor Savkin, PatrickJS, Ryan Burgess, Kent C. Dodds, Jon Kuperman.',
        presenters: [{
          name: 'Ben Lesh',
          twitter: 'benlesh'
        }, {
          name: 'Matt Podwysocki',
          twitter: 'mattpodwysocki'
        }, {
          name: 'Jay Phelps',
          twitter: '_jayphelps'
        }, {
          name: 'Victor Savkin',
          twitter: 'victorsavkin'
        }, {
          name: 'PatrickJS',
          twitter: 'gdi2290'
        }, {
          name: 'Ryan Burgess',
          twitter: 'burgessdryan'
        }, {
          name: 'Kent C. Dodds',
          twitter: 'kentcdodds'
        }, {
          name: 'Jon Kuperman',
          twitter: 'jkup'
        }]
      }, {
        type: 'youtube',
        id: 'QRt9QBdpQQ0',
        vanity: 'fluentconf-conferences',
        title: 'FluentConf Special (Part 1 of 2) - O\'Reilly FluentConf 2016 - @getify Love, Best Talks, Conferences, Hats, and Pajamas',
        description: 'An impromptu get together with Ben Lesh,Matt Podwysocki, Jay Phelps, Victor Savkin, PatrickJS, Ryan Burgess, Kent C. Dodds, Jon Kuperman.\nWe tried to get everyone to wear pajamas. @mattpodwysocki, @kentcdodds and @victorsavkin obliged.',
        presenters: [{
          name: 'Ben Lesh',
          twitter: 'benlesh'
        }, {
          name: 'Matt Podwysocki',
          twitter: 'mattpodwysocki'
        }, {
          name: 'Jay Phelps',
          twitter: '_jayphelps'
        }, {
          name: 'Victor Savkin',
          twitter: 'victorsavkin'
        }, {
          name: 'PatrickJS',
          twitter: 'gdi2290'
        }, {
          name: 'Ryan Burgess',
          twitter: 'burgessdryan'
        }, {
          name: 'Kent C. Dodds',
          twitter: 'kentcdodds'
        }, {
          name: 'Jon Kuperman',
          twitter: 'jkup'
        }]
      }, {
        type: 'youtube',
        id: '8-Hu_rUnZ5w',
        vanity: 's01e08-mentoring-developers',
        title: 'S01E08 - The Evolution of EmberJS and Mentoring Developers featuring EmberSherpa with EmberWeekend',
        description: "Taras, EmberSherpa, speaks to Chase and Jonathan of EmberWeekend on how the ember ecosystem is evolving with regards to application development, mentoring developers, what it's like to pair with 100+ people in just a few months, and more on this Modern Web podcast.",
        presenters: [{
          name: 'Taras Mankovski',
          twitter: 'embersherpa'
        },{
          name: 'Chase McCarty',
          twitter: 'code0100fun'
        },{
          name: 'Jonathan Jackson',
          twitter: 'rondale_sc'
        },{
          name: 'EmberWeekend',
          twitter: 'emberweekend'
        }]
      }, {
        type: 'podbean',
        id: 'k5i5a-5d52d5',
        vanity: 's01e07-polymer-2016',
        title: 'S01E07 - The Polymer 2016 Roadmap featuring Rob Dodson with Justin Ribeiro',
        description: "In S01E07, Rob Dodson, Google Developer Advocate shares the future of web components and Polymer with us. Justin Ribeiro, Google Developer Expert interviews. \` Rob gives us an update on the browser web components battle and where everyone is with relation to feature shipments. Shadow DOM and custom elements should be hitting more browsers this year, and where the future of HTML imports will be. \`If you're looking to get started using web components, Rob covers what you as a developer can do right now and Polymer's vision for how they play in the web component ecosystem. \`Rob discusses his opinions as to why large corporations are quicker to adopt web components than the OSS community, shares juicy gossip on an up and coming Polymer CLI, and tells us about cool tools like polygit.org!",
        presenters: [{
          name: 'Rob Dodson',
          twitter: 'rob_dodson'
        },
        {
          name: 'Justin Ribeiro',
          twitter: 'justinribeiro'
        }],
        imageURL: '/img/podcasts/modern-web-play-button.jpg'
      }, {
        type: 'podbean',
        id: 'bjgre-5d4a80',
        vanity: 's01e06-ember-luke-melia',
        title: 'S01E06 - The Beginning of Ember, Ember-CLI-Deploy, and OSS Teams with Luke Melia & Ember Weekend',
        description: "Chase and Jonathan from Ember Weekend interview Luke Melia from Yapp Labs. Luke shares the beginning of Ember and the adoption of Ember at Yapp Labs when it was just him and Kris Selden coding it up. He shares the behind how Ember NYC started, and how ember-cli-deploy became the default deployment story for Ember. Luke also discusses the success of the ember-cli-deploy plugin ecosystem, the natural evolution of the ember-cli-deploy team, collaboration for open source projects in the ember ecosystem, and his thoughts on how javascript and frameworks will evolve in the next year.",
        presenters: [{
          name: 'Luke Melia',
          twitter: 'lukemelia'
        },{
          name: 'Chase McCarty',
          twitter: 'code0100fun'
        },{
          name: 'Jonathan Jackson',
          twitter: 'rondale_sc'
        },{
          name: 'EmberWeekend',
          twitter: 'emberweekend'
        }],
        imageURL: '/img/podcasts/modern-web-play-button.jpg'
      }, {
        type: 'youtube',
        id: '1NXhOChi54U',
        vanity: 's01e05-angular-2-trailer',
        title: 'S01E05 Trailer - "I really like Angular 2" - Jafar Husain',
        description: "60 second promo trailer for Season 1 Episode 5 of the Jeff Cross Show on Modern Web featuring Jafar Husain of Netflix.",
        presenters: [{
          name: 'Jafar Husain',
          twitter: 'jhusain'
        },{
          name: 'Jeff Cross',
          twitter: 'jeffbcross'
        }]
      }, {
        type: 'youtube',
        id: 'XhVyrAFed58',
        vanity: 's01e05-observables-promises',
        title: 'S01E05 - It was an observation, I Promise',
        description: "Welcome to the Jeff Cross Show on Modern Web! \`Jafar Husain of Netflix tells us why Angular 2 is the greatest framework ever, then gets put through the ringer with code questions from Jeff Cross. He also speaks about the history of ReactiveX, gives his opinion on observers and promises, and jams on the state of functional programing exploding in the javascript community. He also speaks on FalcorJS and how the project came about at Netflix and its origination.",
        presenters: [{
          name: 'Jafar Husain',
          twitter: 'jhusain'
        },{
          name: 'Jeff Cross',
          twitter: 'jeffbcross'
        }]
      }, {
        type: 'podbean',
        id: 'wmurn-5cae29',
        title: 'S01E04 - MobileDoc, Torii, and the future of EmberJS',
        vanity: 's01e04-mobiledoc',
        description: "Matt Beale, EmberJS core team member discusses with Chase McCarthy and Jonathan Jackson of Ember Weekend his hopes of MobileDoc playing an integral role in the ever-changing web ecosystem, Torii's past, present, and future, and how EmberJS is evolving as a framework and what he believes the future holds for teams such as ember-cli-deploy, ember-data, and more.",
        presenters: [{
          name: 'Matt Beale',
          twitter: 'mixonic'
        },{
          name: 'Chase McCarthy',
          twitter: 'code0100fun'
        },{
          name: 'Jonathan Jackson',
          twitter: 'rondale_sc'
        },{
          name: 'EmberWeekend',
          twitter: 'emberweekend'
        }],
        imageURL: '/img/podcasts/modern-web-play-button.jpg'
      }, {
        type: 'podbean',
        id: 'gxcb6-5cae22',
        vanity: 's01e03-beard-jeff-cross-kent-dodds',
        title: 'S01E03 - ES6, Beard of Jeff Cross, Air Squats, and JavaScript Air',
        description: "In this podcast, Kent C. Dodds talks about JavaScript Air and the backlash he's experienced after leaving Angular Air, how he views learning frameworks, his favorite ES6 features, how air squats play a significant role in his speaker life, and how the beard of Jeff Cross brings super powers to the JavaScript community. Ben Lesh prods.",
        presenters: [{
          name: 'Kent C. Dodds',
          twitter: 'kentcdodds'
        },{
          name: 'Ben Lesh',
          twitter: 'benlesh'
        }],
        imageURL: '/img/podcasts/modern-web-play-button.jpg'
      }, {
        type: 'podbean',
        id: 'j4me2-5ca7f8',
        vanity: 's01e02-promises-observables',
        title: 'S01E02 Part 2 - Promises Bad, Observables Good',
        description: "Why are promises bad and observables good? Ben Lesh, lead on RxJS 5 talks to Taras Mankovski about how observables are the way of the future and why you should use them.",
        presenters: [{
          name: 'Ben Lesh',
          twitter: 'benlesh'
        },{
          name: 'Taras Mankovski',
          twitter: 'embersherpa'
        }],
        imageURL: '/img/podcasts/modern-web-play-button.jpg'
      }, {
        type: 'podbean',
        id: 'ezwbs-5ca7ec',
        vanity: 's01e02-angular-ember-react-netflix',
        title: 'S01E02 Part 1 - Angular vs Ember vs React at Netflix',
        description: "Ben Lesh reveals all to Taras Mankovski and talks about frameworks at Netflix. Hear what he has to say about Angular vs Ember vs React at Netflix.",
        presenters: [{
          name: 'Ben Lesh',
          twitter: 'blesh'
        },{
          name: 'Taras Mankovski',
          twitter: 'embersherpa'
        }],
        imageURL: '/img/podcasts/modern-web-play-button.jpg'
      }, {
        type: 'podbean',
        id: '5yebs-5ca7d0',
        vanity: 's01e01-yehuda-katz-tc39',
        title: 'S01E01 - What the TC39?',
        description: "What is TC39? Yehuda Katz is interviewed by Jay Phelps and discusses details behind what TC39 does as an organization, ES2015, and more.",
        presenters: [{
          name: 'Yehuda Katz',
          twitter: 'wycats'
        },{
          name: 'Jay Phelps',
          twitter: '_jayphelps'
        }],
        imageURL: '/img/podcasts/modern-web-play-button.jpg'
      }]
    };
  }
});
