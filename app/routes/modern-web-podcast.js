import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      podcasts: [{
        type: 'youtube',
        id: '65-WwVfAcl8',
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
        title: 'S01E11 - A Practical Approach to TDD, BDD, and Various Testing Buzzwords',
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
        id: 'rq34k-5e4fdb',
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
        title: 'S01E02 Part 2 - Promises Bad, Observables Good',
        description: "Why are promises bad and observables good? Ben Lesh, lead on RxJS 5 talks to Taras Mankovski about how observables are the way of the future and why you should use them.",
        presenters: [{
          name: 'Ben Lesh',
          twitter: 'benlesh'
        },{
          name: 'Taras Mankovski',
          twitter: 'embersherpa'
        }],
        imageURL: '/img/podcasts/mmodern-web-play-button.jpg'
      }, {
        type: 'podbean',
        id: 'ezwbs-5ca7ec',
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
    }
  }
});
