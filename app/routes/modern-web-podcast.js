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
        title: 'S02E01 - The Jeff Cross &amp; Alex Eagle Dino Show on Modern Web with Ben Lesh',
        description: 'In this episode filmed at #ngconf, Jeff Cross</a> and fight over Ben Lesh and his awesomeness while wearing dino hoodies. The show begins with an angularjs tattoo branding of The Ben Lesh, then moves on to conversations around last minute bundling decisions for the Angular 2 RC and when RxJS will be incorporated in.',
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
        imageURL: '/img/podcasts/modern-web-cari-sign-angular-lg.png'
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
        imageURL: '/img/podcasts/modern-web-cari-sign-angular-lg.png'
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
        imageURL: '/img/podcasts/modern-web-cari-sign-angular-lg.png'
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
        imageURL: '/img/podcasts/modern-web-cari-sign-angular-lg.png'
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
        type: 'podbean',
        id: 'nb2pd-5ef1c7',
        title: 'foobar',
        description: 'foobar',
        presenters: [{
          name: 'foobar',
          twitter: 'foobar'
        }],
        imageURL: '/img/podcasts/modern-web-cari-sign-angular-lg.png'
      }, {
        type: 'podbean',
        id: 'nb2pd-5ef1c7',
        title: 'foobar',
        description: 'foobar',
        presenters: [{
          name: 'foobar',
          twitter: 'foobar'
        }],
        imageURL: '/img/podcasts/modern-web-cari-sign-angular-lg.png'
      }, {
        type: 'podbean',
        id: 'nb2pd-5ef1c7',
        title: 'foobar',
        description: 'foobar',
        presenters: [{
          name: 'foobar',
          twitter: 'foobar'
        }],
        imageURL: '/img/podcasts/modern-web-cari-sign-angular-lg.png'
      }, {
        type: 'podbean',
        id: 'nb2pd-5ef1c7',
        title: 'foobar',
        description: 'foobar',
        presenters: [{
          name: 'foobar',
          twitter: 'foobar'
        }],
        imageURL: '/img/podcasts/modern-web-cari-sign-angular-lg.png'
      }, {
        type: 'podbean',
        id: 'nb2pd-5ef1c7',
        title: 'foobar',
        description: 'foobar',
        presenters: [{
          name: 'foobar',
          twitter: 'foobar'
        }],
        imageURL: '/img/podcasts/modern-web-cari-sign-angular-lg.png'
      }]
    };
  }
});
