import fs from "fs";
import fetch from "node-fetch";
import html from "html";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { getData } from "../scripts/get-data.js";
const __dirname = dirname(fileURLToPath(import.meta.url));

const template = (_) => html`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>Jim Nielsen</title>
      <meta name="description" content="Personal website of Jim Nielsen." />
      <meta name="author" content="Jim Nielsen" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <!-- @TODO meta tags for og:, twitter, etc. -->

      <!-- Inline our CSS -->
      <link
        rel="stylesheet"
        href="https://unpkg.com/modern-normalize@1.0.0/modern-normalize.css"
      />
      <link
        rel="stylesheet"
        href="https://blog.jim-nielsen.com/assets/css/base.css"
      />

      <style>
        ${_.css}
      </style>

      <style>
        /* body:after {
        content: "";
        background: #000 url(/assets/img/profile.jpg) no-repeat 0 100%;
        width: 400px;
        height: 100%;
        position: fixed;
        right: 0;
        top: 0;
        border-left: 1px solid rgba(255, 255, 255, 0.1);
      } */
      </style>
    </head>
    <body class="wrapper">
      <!-- @TODO
    <section
      style="
        overflow: hidden;
        background: #0a0607;
        border-radius: 50px;
        margin-bottom: 60px;
        height: 650px;

        padding-top: 20px;
        display: flex;
      "
    >
      <img
        src="/assets/img/jim.jpg"
        style="max-height: 100%; align-self: flex-end"
      />
    </section>
    -->

      <img src="/assets/img/drawing-self.svg" />

      <section class="copy">
        <h1>Jim Nielsen: dad, designer, developer (in that order).</h1>
        <h2>
          Currently: Director of Design at
          <a href="https://www.sagesure.com/">SageSure</a>
        </h2>

        <p id="nav-list">
          ↓
          <a href="#writing">Writing</a>
          <a href="#icon-galleries">Icon Galleries</a>
          <a href="#dribbble">Dribbble</a>
          <a href="#pies">Pies</a>
          <a href="#side-projects">Side Projects</a>
          <a href="#employment">Employment</a>
          <a href="#contact">Contact</a>
        </p>
        <style>
          #nav-list {
            font-size: 0.75rem;
          }
          #nav-list a {
            margin-left: calc(1.618rem / 4);
            padding-right: calc(1.618rem / 4);
          }
          #nav-list li:last-child:after {
            display: none;
          }
          #nav-list li:after {
            content: "/";
            color: var(--color-gray-5);
            margin-left: calc(1.618rem / 3);
            padding-right: calc(1.618rem / 3);
          }
        </style>

        <p>
          <em>Who are you?</em> “I am a designer who codes” is likely the answer
          you’re looking for, but what I do is solve problems and add value.
          That said, I’m so much more than my job but this is a website where I
          talk about myself professionally so I have to say these kinds of
          things.
        </p>
        <p>
          <em>What are your skills?</em> I design visual interfaces and leverage
          principles of design, color theory, and typography. I write code and
          intimately understand HTML, CSS, and JavaScript. But my skills are
          tools to an end: to solve problems and add value.
        </p>
        <p>
          <em>What’s your expertise?</em> My expertise lies in synthesizing
          knowledge across traditionally disparate boundaries. “Visual
          designer”, “Front-end Developer”, and “Product Manager” are all
          responsibilities I assume in order to add value to a business, to
          enhance a company’s culture, to bring clarity to a project, or to just
          get along with humans (a task often perceived as a difficult for
          people who write instructions for machines).
        </p>
        <p>
          <em>How are you, you know, as a human?</em> Don’t take it from me,
          here are the words of a peer when I was departing a previous employer:
          “Gonna be a real bummer here w/o you. You bring a lot of great design,
          and a lot of not-being-an-asshole-ness.”
        </p>

        <p>
          <em>Do you have anything else to say?</em> I do. Glad you asked.
          Everything I am—as a designer, developer, really just a human—is a
          result of the wonderful people who I’ve crossed paths with in my life.
          In technology in particular, I’ve worked with some of the most
          <a href="https://twitter.com/jenniferdary" title="Jen">inpsiring</a>,
          <a href="https://about.me/timmeaney" title="Tim">charismatic</a>,
          <a href="https://ashby.io" title="Ashby">curious</a>,
          <a href="http://www.garrettkalleberg.com" title="Garrett">endearing</a
          >,
          <a href="https://twitter.com/cshoe_" title="shoe">introspective</a>,
          <a href="https://darrennewton.com" title="d_run">wise</a>,
          <a href="https://jws.io/" title="justinn">unassuming</a>,
          <a href="https://imnikkilee.com" title="Nikki">artistic</a>,
          <a href="https://github.com/bowmanb" title="B-bow">amiable</a>,
          <a href="https://github.com/damassi" title="chrispy">selfless</a>,
          <a href="https://www.benbailes.net" title="Ben">humane</a>,
          <a href="https://mayamashkovich.com/design" title="Maya">delightful</a
          >, and
          <a href="https://tylergaw.com" title="the gaw">sincere</a> people
          you’ll ever meet—and I didn’t use the word “talented” because they all
          are! More than any project, I’m proud of the people I’ve worked with
          and learned from. I look forward to crossing paths with you someday
          too, dear reader.
        </p>
        <p>— Jim Nielsen on Oct 11, 2020</p>
      </section>

      <section class="copy">
        <img src="/assets/img/drawing-writing-icon.svg" />
        <h1 id="writing">Writing <a href="#writing">🔗</a></h1>
        <!-- <p>
        I enjoy the practice writing because it is a form of seeking clarity to
        me. That said, I don’t believe a lot of the things I’ve written about in
        the past. Why? Because I’ve learned a lot through both writing and
        direct experience and the more you learn, the more your beliefs evolve.
        It is inevitable. If you believe the same things you believed ten years
        ago, I would suggest that you haven’t really learned anything. New
        knowledge causes me to reassess my beliefs. The more knowledge you have,
        the broader your perspective is, and the more clearly you see contexts
        and relationships between truth and error. It’s like your designs from
        years ago. You squirm when you look at them. Why? Because your
        understanding and knowledge and aesthetics have changed and evolved over
        the years. That’s how I feel about my writing.</p> -->
        <p>
          I enjoy writing as a practice of seeking clarity and
          <a
            href="https://blog.jim-nielsen.com/2018/writing-as-iterative-problem-solving/"
            >iteratively improving my thinking</a
          >. It’s like QA, but for my thoughts. Until I can accurately,
          concisely, and comprehensibly articulate my thoughts to another
          person, I don’t know what I think I know.
        </p>

        <h2>My Blog</h2>

        <p>
          I started blogging circa 2008—those first few years being nonsensical
          and ephemeral—and guess what? I’m still trying to find my voice.
        </p>
        <p>Here’s a few of my most recent posts:</p>
        <ul>
          ${_.blogPosts.map(
            ({ url, title, date_published }) => html`
              <li>
                <a href="${url}">${title}</a>
                <time class="small">${date_published}</time>
              </li>
            `
          )}
          <li>
            View more on
            <a href="https://blog.jim-nielsen.com">blog.jim-nielsen.com ➝</a>
          </li>
        </ul>

        <p>
          My blogging has resonated with folks online. Here are a few cited
          reverberations:
        </p>

        <ul>
          ${_.blogPostCitations.map(
            ({ domain, name, quote, url }, i) => html`
              ${i === 8 &&
              html`<li><a href="" class="js-show-more">Show more...</a></li>`}

              <li ${i < 8 ? "" : "hidden"}>
                <p>
                  <a href="${url}">${name} on ${domain}</a>${quote &&
                  `:“${quote}”`}
                </p>
              </li>
            `
          )}
        </ul>

        <script>
          Array.from(document.querySelectorAll(".js-show-more")).forEach(
            (el) => {
              el.addEventListener("click", (e) => {
                e.preventDefault();
                console.log(el, el.parentNode);
                el.parentNode.parentNode
                  .querySelectorAll("[hidden]")
                  .forEach((li) => {
                    li.removeAttribute("hidden");
                  });
                el.parentNode.remove();
              });
            }
          );
        </script>

        <!-- @TODO 
      <h3>Others</h3>
      <details>
        <summary>
          View links I’ve tracked to my writing from across the web...
        </summary>
        <ul>
          <li>Sidebar.io</li>
        </ul>
      </details>
      -->

        <h2>Published Writings: An Archive</h2>
        <p>
          While I haven’t done it as much recently, I used to publish a lot more
          articles to industry blogs.
        </p>

        <ul class="copy-full-width posts-lis">
          {{#publishings}}
          <li>
            <a href="{{ link }}">{{ title }}</a>
            <span class="small"
              >{{publisherDomain}}, <time>{{ date }}</time></span
            >

            <!--
          {{#tweet}}
          <blockquote style="font-size: 0.75em">
            {{ content }} –
            <a href="https://twitter.com/user/status/{{id}}"
              >{{author.name}} (@{{author.handle}})</a
            >
          </blockquote>
          {{/tweet}}
          -->
          </li>
          {{/publishings}}
        </ul>
        <!--
      <style>
        #publishings img {
          border-radius: 8px;
        }
        .pub-container {
          list-style-type: none;
          padding: 0;
        }
        .pub {
          display: flex;
          margin-bottom: calc(1.618rem / 2);
        }
        .pub__img {
          display: flex;
          align-items: center;
          margin-right: calc(1.618rem / 2);
        }
        .pub__meta a {
          display: block;
        }

        .pub__meta p {
          margin: 0;
          opacity: 0.5;
          font-size: 0.666rem;
          display: flex;
        }
        .pub__meta li:after {
          content: "·";
          padding-left: calc(1.618rem / 4);
          margin-right: calc(1.618rem / 4);
        }
        .pub__meta li:last-child:after {
          display: none;
        }
      </style>
      -->
      </section>

      <section class="copy">
        <img src="/assets/img/drawing-icon-galleries.svg" />
        <h1 id="icon-galleries">
          Passion Project: My Icon Galleries <a href="#icon-galleries">🔗</a>
        </h1>
        <p>
          These galleries are intended to showcase the art of app icon designed
          for apps in Apple’s ecosystem. I’ve been curating these galleries
          since ~2010 and continue to iteratively improve them. I’m even working
          with the awesome @michaelfarup to create a printed book showcasing
          many of these designs.
        </p>
        <!-- @TODO  tags posts as #iconGalleries on blog and pull some in here
      <p>
        Links to blog articles where I talk about the design of these sites.
      </p> -->
        {{#iconGalleries}}
        <p><a href="{{ url }}">{{ name }} ➝</a></p>
        <ul class="copy-full-width" id="icons">
          {{#icons}}
          <li data-icon-type="{{ type }}">
            <img
              src="{{ artworkUrl }}"
              alt="{{ title }} icon"
              width="128"
              height="128"
              loading="lazy"
            />
          </li>
          {{/icons}}
        </ul>
        {{/iconGalleries}}

        <style>
          h1 a[href^="#"] {
            visibility: hidden;
            opacity: 0;
            font-size: 0.5em;
            text-decoration: none !important;
          }
          h1:hover a[href^="#"] {
            visibility: visible;
            opacity: 1;
          }
          #icons {
            margin: 0;
            padding: 0;
            list-style-type: none;
            display: flex;
            flex-wrap: wrap;
            max-width: 1800px;
          }
          #icons li {
            margin-right: 1.618rem;
            margin-bottom: 1.618rem;
          }
          #icons img {
            width: 100px;
            height: 100px;
          }
          [data-icon-type="ios"] img {
            border-radius: 22.5%;
          }
          [data-icon-type="watchos"] img {
            border-radius: 50%;
          }
          [data-icon-type="ios"] img,
          [data-icon-type="watchos"] img {
            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
          }
        </style>

        <p>
          Each of these sites are designed, engineered, and curated by me. I
          occasionally write about the how behind all of that on my blog. My
          most recent posts on the subject are the following:
        </p>
        <ul class="">
          {{#blogPostsByTag.iconGalleries}}
          <li>
            <a href="{{ permalink }}">{{ title }}</a>
            <time class="small">{{ date }}</time>
          </li>
          {{/blogPostsByTag.iconGalleries}}
          <li>
            More on
            <a href="https://blog.jim-nielsen.com/tags/#iconGalleries"
              >blog.jim-nielsen.com →</a
            >
          </li>
        </ul>
      </section>

      <section class="copy">
        <h1 id="dribbble">
          Shots From My Baller Days on
          <a href="https://www.dribbble.com/jimniels">Dribbble</a>
          <a href="#dribbble">🔗</a>
        </h1>
        <p>
          I used to Dribbble, but I don’t do as much “production” design work
          anymore. But I still find my stuff from the past interesting, so I
          keep it here for nostalgia. Rather than Dribbble, I’d honestly rather
          go shoot hoops IRL. @TODO my design now-a-days is more about ...
        </p>
        <div class="copy-full-width" id="dribbble-shots">
          {{#dribbble}}
          <a href="{{ href }}">
            <img
              src="{{ src }}"
              alt="{{ title }}"
              title="{{ title }} on Dribbble"
              width="400"
              height="300"
              loading="lazy"
            />
          </a>
          {{/dribbble}}
        </div>
        <style>
          #dribbble-shots {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            max-width: 1200px;
            /*display: flex;
          flex-wrap: wrap;
          max-width: 1800px;*/
          }
          #dribbble-shots a:hover {
            filter: none;
          }
          #dribbble-shots img {
            display: block;
            transition: 0.2s ease all;
            box-shadow: 0 0px 0 1px rgba(0, 0, 0, 0.075);
          }
          #dribbble-shots img:hover {
            /* transform: scale(1.025); */
            /* transform: translateY(-2px); */
            /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1); */
          }
        </style>
      </section>

      <section class="copy">
        <h1 id="pies">
          Hobby: I ❤️ Pies and Make Them Under the Handle
          <a href="https://instagram.com/flyingjpies">@flyingjpies</a>
          <a href="#pies">🔗</a>
        </h1>
        <p>
          @TODO Growing up, my Mom always pies. At the time, I didn’t know they
          were <em>the best</em> pies. As I grew into my teenage years, I began
          to notice that I didn’t enjoy eating pies from a restaurant or store
          like all the other kids. Those weren’t real pies.
        </p>
        <p>
          In my mid-twenties, I moved to New York City and figured if I could
          buy a good pie anywhere in the world, surely I could in NYC. Alas, I
          still found myself wanting for a good pie like Mama used to make. So,
          I figured, if you want something done right you gotta do it yourself.
        </p>
        <p>
          I asked my Mom for her recipe and began making my own pies. So while
          my pie obsession was born out of a drive to <em>eat</em> good pie, now
          it’s just as much composed of a desire to <em>make</em> a good pie.
          Making is now half the fun!
        </p>

        <div class="copy-full-width" id="instagram">
          {{#instagram}}
          <a href="{{ href }}">
            <img
              src="{{ src }}"
              alt="Photo from @flyingjpies on Instagram"
              width="300"
              height="300"
              loading="lazy"
            />
          </a>
          {{/instagram}}
        </div>
        <style>
          #instagram {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            max-width: 1200px;
            /*display: flex;
          flex-wrap: wrap;
          max-width: 1800px;*/
          }
          #instagram a:hover {
            filter: none;
          }
          #instagram img {
            display: block;
          }
        </style>
      </section>

      <section class="copy" id="side-projects">
        <h1 id="side-projects">
          Side Projects <a href="#side-projects">🔗</a>
        </h1>

        <h2>
          <a href="https://sassme.jim-nielsen.com">SassMe</a>: visualize Sass
          color functions in real-time.
        </h2>
        <p>
          Circa 2012. I used to post on dribbble, but seeing as I’m not much of
          a designer anymore—let alone I don’t have anything that fancy, I
          dono’t do it much anymore. That’s not to say I don’t filnd the stuff
          from the past stilll interesting! So i keep it here for nostalgia.
          Honestly, rather than dribbble, I’d rather just play basketball.
        </p>

        <ul>
          {{#tweets.sassme}}
          <li>
            <a href="https://twitter.com/user/status/{{id}}"
              >{{author.name}} (@{{author.handle}})</a
            >: “{{content}}”
          </li>
          {{/tweets.sassme}}
        </ul>
        <!-- 
      {{#tweets.sassme}}
      <blockquote>
        <p>
          {{content}} –
          <a href="https://twitter.com/user/status/{{id}}"
            >{{author.name}} (@{{author.handle}})</a
          >
        </p>
      </blockquote>
      {{/tweets.sassme}}
      -->

        <!-- @TODO consider enhanced design here
      <ul class="tweets copy-full-width">
        {{#tweets.sassme}}
        <li class="tweet">
          <a href="https://twitter.com/user/status/{{ id }}">
            <h3>{{author.name}} <small>@{{author.handle}}</small></h3>
            <p>{{content}}</p>
          </a>
        </li>

        {{/tweets.sassme}}
      </ul> 

      <style>
        .tweets {
          font-size: 0.66666rem;
          list-style-type: none;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
        }
        .tweet {
          padding: 0;
          margin: 0 calc(1.618rem / 2) calc(1.618rem / 2) 0;
          /* background-color: var(--color-gray-6);  */
          border-radius: 7px;
          padding: 0.5rem 0.5rem 0.5rem 1rem;
          width: 100%;
          max-width: 21rem;
          position: relative;
        }
        .tweet a {
          text-decoration: none;
          color: inherit;
        }
        .tweet h3,
        .tweet p {
          color: inherit;
          text-decoration: none;
          margin: 0;
        }
        .tweet h3 {
          font-size: inherit;
          font-weight: 700;
          margin-bottom: 0.0833rem;
        }
        .tweet h3 small {
          font-weight: 400;
          opacity: 0.5;
        }
        .tweet:before {
          content: "“";
          position: absolute;
          top: 0.625rem;
          left: calc(1.25rem / -2);
          width: 1.25rem;
          height: 1.25rem;
          background: var(--color-gray-6);
          border-radius: 50%;
          color: var(--color-gray);
          font-size: 1.618rem;
          font-family: serif;
          display: flex;
          text-align: center;
          line-height: 1.25;
          justify-content: center;
        }
      </style> -->

        <h2>
          <a href="https://logo-integrity.jim-nielsen.com">Logo Integrity</a>: a
          visual experiment turned game based on ubiquitos logos.
        </h2>
        <p>
          In <em>A Designer’s Art</em>, Paul Rand asks: “How far out of focus
          can an image be and still be recognized?” He proposes that a
          well-designed logo retains its form and recognizability under the
          duress of real-world use and abuse. For fun, I decided to subject some
          contemporary logos to a form of visual stress and see how well people
          still recognized them. You can

          <a href="https://blog.jim-nielsen.com/2014/logo-integrity/"
            >read my introductory blog post to the project</a
          >
          as well as
          <a href="https://blog.jim-nielsen.com/2018/cabin-of-logo-integrity/"
            >my round up of opinions when it hit designer news</a
          >.
        </p>

        <p class="copy-full-width">
          <img
            src="/assets/img/personal-projects/logo-integrity.png"
            alt="An collection of popular logos, each of which is displayed multiple times and each one gets progressively blurrier."
            loading="lazy"
            width="1000"
            height="666"
          />
        </p>
      </section>

      <section class="copy">
        <h1 id="employment">Employment <a href="#employment">🔗</a></h1>

        <h2>
          Director of Design & UI Architecture @
          <a href="https://www.sagesure.com">SageSure</a> (Remote)
        </h2>

        <p>
          2016 – Present. More info to come... Project: Agent Portal Web
          application allowing agents to quote and bind insurance policies via
          Insight’s platform. Initial work has included redesigning exisiting
          problematic UI interfaces and simplifying front-end implementation
          approaches. Tools: Sketch, Sass. Text as UI Designing and Engineering
          Color Usage in Agent Portal Migrating Away from Compass and Susy to
          Sass Exclusively
        </p>
        <p>Related posts from my weblog:</p>
        <ul>
          {{#blogPostsByTag.insight}}
          <li><a href="{{ permalink }}">{{ title }}</a></li>
          {{/blogPostsByTag.insight}}
        </ul>

        <h2>2016: UI Engineer @ Timshel (Remote)</h2>

        <p>
          Worked on the front-end team doing engineering, design, and product
          management for a variety of web applicaitons and services. In other
          words, when stuff needed to be built, we built and shipped it.
          Project: Admin Web interface for clients administering their account
          on The Groundwork platform. Handled creating, designing, and
          engineering various features for the application’s view layer. Tools:
          Sketch, Sass, CSS Modules, Radium, Javascript, React.js, Redux,
          Bootstrap, Material UI, Git.
        </p>

        <p>Related posts from my weblog:</p>
        <ul>
          {{#blogPostsByTag.timshel}}
          <li><a href="{{ permalink }}">{{ title }}</a></li>
          {{/blogPostsByTag.timshel}}
        </ul>

        <h2>
          2016: Designer & Front-end Developer @
          <a href="https://postlight.com">Postlight</a> (Remote, Freelance)
        </h2>
        <p>
          Succeeded in consulting, designing, and building internal web
          applications (on tight deadlines) for one of Postlight’s biggest
          clients: Time Inc. Project: Assignment Desk Part one in a series of
          internal web applications for Time Inc. Handled sketching,
          wireframeing, and mocking the UI/UX of the application while
          simultaneously engineering the view layer. Tools: Sketch, Sass,
          Javascript, React.js, Redux, Bootstrap, Git. Project: Digital Content
          Production Designed and built based on the Assignment Desk application
          framework. Handled everything from UI/UX to product management to
          front-end development. Tools: Sketch, Invision, Sass, Javascript,
          React.js, Redux, Bootstrap, Git.
        </p>

        <p>Related posts from my weblog:</p>
        <ul>
          {{#blogPostsByTag.postlight}}
          <li><a href="{{ permalink }}">{{ title }}</a></li>
          {{/blogPostsByTag.postlight}}
        </ul>
      </section>

      <section class="copy">
        <h1 id="contact">Contact <a href="#contact">🔗</a></h1>
        <p>
          Want to get in touch? I’d love to hear from you! You can reach out to
          me on:
        </p>
        <ul>
          <li>
            Email: <a href="mailto:jimniels@gmail.com">jimniels@gmail.com</a>
          </li>
          <li>Twitter: <a href="https://twitter.com/jimniels">@jimniels</a></li>
          <li>Github: <a href="https://github.com/jimniels">@jimniels</a></li>
        </ul>
      </section>
    </body>
  </html>`;

console.time("Build time");
getData()
  .then((data) => {
    fs.writeFileSync(join(__dirname, "index.html"), template(data));
  })
  .catch((e) => {
    console.error("Build failed:", e);
  })
  .finally(() => {
    console.timeEnd("Build time");
  });
