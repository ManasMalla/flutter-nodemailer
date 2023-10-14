const functions = require(`firebase-functions`);
const admin = require(`firebase-admin`);
const nodemailer = require(`nodemailer`);
const cors = require(`cors`)({origin: true});
admin.initializeApp();

exports.sendMail = functions.https.onRequest((req, res) => {
  const transporter = nodemailer.createTransport({
    host: `smtp.gmail.com`,
    port: 465,
    pool: true,
    secure: true,
    auth: {
      user: req.query.user,
      pass: req.query.password,
    },
  });
  cors(req, res, () => {
    // getting dest email by query string
    const dest = req.query.dest;
    const subject = req.query.subject;
    const name = req.query.name;
    // const html = req.query.html;
    const mailOptions = {
      from: req.query.user,
      to: dest,
      subject: subject,
      html: `
      <html>
      <head>
        <meta content="text/html; charset=UTF-8" http-equiv="content-type" />
        <style type="text/css">
          
          ol {
            margin: 0;
            padding: 0;
          }
          table td,
          table th {
            padding: 0;
          }
          .c1 {
            margin-left: 36pt;
            padding-top: 12pt;
            padding-left: 0pt;
            padding-bottom: 12pt;
            line-height: 1.1500000000000001;
            orphans: 2;
            widows: 2;
            text-align: left;
          }
          .c6 {
            margin-left: 108pt;
            padding-top: 3pt;
            padding-left: 0pt;
            padding-bottom: 3pt;
            line-height: 1.1500000000000001;
            orphans: 2;
            widows: 2;
            text-align: left;
          }
          .c5 {
            margin-left: 72pt;
            padding-top: 2pt;
            padding-left: 0pt;
            padding-bottom: 2pt;
            line-height: 1.1500000000000001;
            orphans: 2;
            widows: 2;
            text-align: left;
          }
          .c15 {
            margin-left: 108pt;
            padding-top: 0pt;
            padding-left: 0pt;
            padding-bottom: 12pt;
            line-height: 1.1500000000000001;
            orphans: 2;
            widows: 2;
            text-align: left;
          }
          .c14 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.1500000000000001;
            orphans: 2;
            widows: 2;
            text-align: left;
            height: 11pt;
          }
          .c2 {
            color: #000000;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 11pt;
            font-family: "Google Sans";
            font-style: normal;
          }
          .c7 {
            padding-top: 6pt;
            padding-bottom: 6pt;
            line-height: 1;
            orphans: 2;
            widows: 2;
            text-align: left;
            height: 11pt;
          }
          .c21 {
            padding-top: 0pt;
            padding-bottom: 12pt;
            line-height: 1.1500000000000001;
            orphans: 2;
            widows: 2;
            text-align: left;
          }
          .c12 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.5;
            orphans: 2;
            widows: 2;
            text-align: left;
          }
          .c22 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.1500000000000001;
            orphans: 2;
            widows: 2;
            text-align: left;
          }
          .c11 {
            padding-top: 12pt;
            padding-bottom: 12pt;
            line-height: 1.1500000000000001;
            orphans: 2;
            widows: 2;
            text-align: left;
          }
          .c9 {
            color: #000000;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 11pt;
            font-style: normal;
          }
          .c17 {
            color: #5f6368;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 10pt;
            font-style: normal;
          }
          .c20 {
            color: #4285f4;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 9pt;
            font-style: normal;
          }
          .c27 {
            color: #1e323d;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 12pt;
            font-style: normal;
          }
          .c13 {
            color: #2e3947;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 9pt;
            font-style: normal;
          }
          .c8 {
            color: #4285f4;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 11pt;
            font-style: normal;
          }
          .c24 {
            -webkit-text-decoration-skip: none;
            color: #1155cc;
            text-decoration: underline;
            text-decoration-skip-ink: none;
          }
          .c10 {
            background-color: #ffffff;
            max-width: 540pt;
          }
          .c16 {
            color: inherit;
            text-decoration: inherit;
          }
          .c23 {
            font-size: 9pt;
            color: #1e323d;
          }
          .c25 {
            font-size: 9pt;
            color: #fd9668;
          }
          .c4 {
            font-weight: 400;
            font-family: "Google Sans";
          }
          .c0 {
            font-weight: 700;
            font-family: "Google Sans";
          }
          .c26 {
            font-size: 9pt;
            color: #4285f4;
          }
          .c3 {
            padding: 0;
            margin: 0;
          }
          .c18 {
            height: 11pt;
          }
          .c19 {
            background-color: #ffffff;
          }
          .title {
            padding-top: 0pt;
            color: #000000;
            font-size: 26pt;
            padding-bottom: 3pt;
            font-family: "Arial";
            line-height: 1.1500000000000001;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left;
          }
          .subtitle {
            padding-top: 0pt;
            color: #666666;
            font-size: 15pt;
            padding-bottom: 16pt;
            font-family: "Arial";
            line-height: 1.1500000000000001;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left;
          }
          li {
            color: #000000;
            font-size: 11pt;
            font-family: "Arial";
          }
          p {
            margin: 0;
            color: #000000;
            font-size: 11pt;
            font-family: "Arial";
          }
          h1 {
            padding-top: 20pt;
            color: #000000;
            font-size: 20pt;
            padding-bottom: 6pt;
            font-family: "Arial";
            line-height: 1.1500000000000001;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left;
          }
          h2 {
            padding-top: 18pt;
            color: #000000;
            font-size: 16pt;
            padding-bottom: 6pt;
            font-family: "Arial";
            line-height: 1.1500000000000001;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left;
          }
          h3 {
            padding-top: 16pt;
            color: #434343;
            font-size: 14pt;
            padding-bottom: 4pt;
            font-family: "Arial";
            line-height: 1.1500000000000001;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left;
          }
          h4 {
            padding-top: 14pt;
            color: #666666;
            font-size: 12pt;
            padding-bottom: 4pt;
            font-family: "Arial";
            line-height: 1.1500000000000001;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left;
          }
          h5 {
            padding-top: 12pt;
            color: #666666;
            font-size: 11pt;
            padding-bottom: 4pt;
            font-family: "Arial";
            line-height: 1.1500000000000001;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left;
          }
          h6 {
            padding-top: 12pt;
            color: #666666;
            font-size: 11pt;
            padding-bottom: 4pt;
            font-family: "Arial";
            line-height: 1.1500000000000001;
            page-break-after: avoid;
            font-style: italic;
            orphans: 2;
            widows: 2;
            text-align: left;
          }
        </style>
      </head>
      <body class="c10 doc-content">
        <p class="c22">
          <span><img
              alt=""
              src="https://gdsc.manasmalla.dev/headers-footers/header.png"
              style="
                margin-left: -0px;
                margin-top: -0px;
                transform: rotate(0rad) translateZ(0px);
                -webkit-transform: rotate(0rad) translateZ(0px);
              "
              title=""
          /></span>
        </p>
        <p class="c14"><span class="c2"></span></p>
        <p class="c18 c21"><span class="c2"></span></p>
        <p class="c21"><span class="c2">Hi ${name},</span></p>
        <p class="c11">
          <span class="c4"
            >Congratulations &#x1f389;! We are excited to inform you that you have been shortlisted &#x1f389;
            to be a part of the core team of the </span
          ><span class="c0">Google Developer Student Club (GDSC) &lsquo;23-24</span
          ><span class="c2"
            >&nbsp;at GITAM, a vibrant community for students interested in Google
            developer technologies. We strive to make sure that GDSC is open to all
            and offers a plethora of opportunities for personal and professional
            growth.</span
          >
        </p>
        <p class="c11">
          <span class="c0">To be shortlisted</span
          ><span class="c4"
            >&nbsp;for the next stage of the recruitment drive, you would need to
            complete the following tasks, given based on the domains you&rsquo;ve
            applied for, before the </span
          ><span class="c0">15th October 2023, 11:59PM</span
          ><span class="c4">.</span>
        </p>
        ${req.query.istech == 'true' ? `<p class="c21"><span class="c9 c0">Tech Domains:</span></p>`:``}
        ${req.query.isandroid == 'true' ? `<ol class="c3 lst-kix_4nvrbssnhpya-0 start" start="1">
          <li class="c1 li-bullet-0"><span class="c9 c0">Android:</span></li>
        </ol>
        <ul class="c3 lst-kix_4nvrbssnhpya-1 start">
          <li class="c5 li-bullet-0">
            <span class="c0">Task</span
            ><span class="c2"
              >: Create either of the following simple Android app:</span
            >
          </li>
        </ul>
        <ol class="c3 lst-kix_4nvrbssnhpya-2 start" start="1">
          <li class="c15 li-bullet-0">
            <span class="c0">Flashcard Quiz App: </span
            ><span class="c2"
              >Create a flashcard app for studying. Users can create decks of
              flashcards with questions and answers. The app should allow users to
              quiz themselves and track their progress.</span
            >
          </li>
          <li class="c15 li-bullet-0">
            <span class="c0">Recipe Book App: </span
            ><span class="c2"
              >Develop a recipe book app where users can add and browse recipes.
              Include features for adding ingredients, steps, and images for each
              recipe.</span
            >
          </li>
        </ol>
        <ul class="c3 lst-kix_4nvrbssnhpya-1">
          <li class="c5 li-bullet-0">
            <span class="c2"
              >Use Android Studio for development. Provide a brief report on the
              app&rsquo;s working and developer journey through a blog on
              Medium/HashNode. You can also share a screen recording when you are
              building the app to be featured on the official DSC handle.</span
            >
          </li>
        </ul>`:``}
        ${req.query.isml == 'true' ? `<ol class="c3 lst-kix_4nvrbssnhpya-0" start="2">
          <li class="c1 li-bullet-0">
            <span class="c9 c0">Machine Learning:</span>
          </li>
        </ol>
        <ul class="c3 lst-kix_4nvrbssnhpya-1 start">
          <li class="c5 li-bullet-0">
            <span class="c0">Task</span
            ><span class="c2"
              >: Train a basic machine learning model (e.g., linear regression)
              using a popular library like TensorFlow or scikit-learn. Provide a
              brief report on the model&#39;s accuracy, performance, application and
              usage through a blog on Medium/HashNode.</span
            >
          </li>
        </ul>`:``}
        ${req.query.isflutter == 'true' ? `<ol class="c3 lst-kix_4nvrbssnhpya-0" start="3">
          <li class="c1 li-bullet-0"><span class="c9 c0">Flutter:</span></li>
        </ol>
        <ul class="c3 lst-kix_4nvrbssnhpya-1 start">
          <li class="c5 li-bullet-0">
          <span class="c0">Task</span
          ><span class="c2">: Build a basic Flutter app that: </span>
          </li>
        </ul>
        <ol class="c3 lst-kix_4nvrbssnhpya-2 start" start="1">
          <li class="c15 li-bullet-0">
            <span class="c0">Flutter News Reader App: </span
            ><span class="c2"
              >Create a news reader app that fetches and displays
              news/blogs/articles from various sources about the Flutter Platform.
              Allow users to filter news by category and save articles for offline
              reading.</span
            >
          </li>
          <li class="c15 li-bullet-0">
            <span class="c0">Movie Recommendation App: </span
            ><span class="c2"
              >Create an app that recommends movies to users based on their
              preferences and ratings. Integrate with a movie API to fetch movie
              details and posters.</span
            >
          </li>
          <li class="c15 li-bullet-0">
            <span class="c0">Expense Sharing App: </span
            ><span class="c2"
              >Develop an app that helps groups of people split expenses easily,
              ideal for roommates or friends traveling together. Allow users to add
              expenses, specify payers, and settle debts.</span
            >
          </li>
        </ol>
        <ul class="c3 lst-kix_4nvrbssnhpya-1">
          <li class="c5 li-bullet-0">
            <span class="c2"
              >Provide a brief report on the app&rsquo;s performance and developer
              journey through a blog on Medium/HashNode. You can also share a screen
              recording when you are building the app to be featured on the official
              DSC handle.</span
            >
          </li>
        </ul>`: ``}
        ${req.query.iscloud == 'true' ? `<ol class="c3 lst-kix_4nvrbssnhpya-0" start="4">
          <li class="c1 li-bullet-0"><span class="c9 c0">Cloud:</span></li>
        </ol>
        <ul class="c3 lst-kix_4nvrbssnhpya-1 start">
          <li class="c5 li-bullet-0">
          <span class="c0">Task</span
          ><span class="c2"
              >: Create a virtual machine, upload a file (or) Create a cloud
              storage bucket and upload a document. Provide a brief report
              describing your journey while completing the task and some learning
              and challenges you&rsquo;ve faced along through a blog on
              Medium/HashNode. You can also share a screen recording when completing
              the task to be featured on the official DSC handle.</span
            >
          </li>
        </ul>` : ``}
        ${req.query.isweb == 'true' ? `<ol class="c3 lst-kix_4nvrbssnhpya-0" start="5">
          <li class="c1 li-bullet-0"><span class="c9 c0">Web:</span></li>
        </ol>
        <ul class="c3 lst-kix_4nvrbssnhpya-1 start">
          <li class="c5 li-bullet-0">
          <span class="c0">Task</span
          ><span class="c2"
              >: Create a personal portfolio website using the web tech-stack of
              your choice. Include at least two sections - an &quot;About Me&quot;
              section and a &quot;Projects&quot; section. Provide a brief report
              describing your journey while building the website and some learning
              and challenges you&rsquo;ve faced along through a blog on
              Medium/HashNode. You can also share a screen recording when you are
              building the website to be featured on the official DSC handle.</span
            >
          </li>
        </ul>` : ``}
        ${req.query.iscp == 'true' ? `<ol class="c3 lst-kix_4nvrbssnhpya-0" start="6">
        <li class="c1 li-bullet-0">
          <span class="c9 c0">Competitive Programming (CP):</span>
        </li>
      </ol>
      <ul class="c3 lst-kix_4nvrbssnhpya-1 start">
        <li class="c5 li-bullet-0">
        <span class="c0">Task</span
        ><span class="c2"
            >: Solve a beginner-level coding problem from platforms like
            LeetCode, HackerRank, or Codeforces. Provide the code and an
            explanation of your approach through a blog on Medium/HashNode.</span
          >
        </li>
      </ul>` : ``}
      ${req.query.isnontech == 'true' ? `<p class="c11"><span class="c9 c0">Non-Tech Domains:</span></p>`:``}
      ${req.query.iswomenambassador == 'true' ? `<ol class="c3 lst-kix_gznf9rx5hs26-0 start" start="7">
          <li class="c1 li-bullet-0">
            <span class="c9 c0">Women Ambassador:</span>
          </li>
        </ol>
        <ul class="c3 lst-kix_gznf9rx5hs26-1 start">
          <li class="c5 li-bullet-0">
            <span class="c0">Task</span
            ><span class="c2">: Complete the following:</span>
          </li>
        </ul>
        <ol class="c3 lst-kix_gznf9rx5hs26-2 start" start="1">
          <li class="c6 li-bullet-0">
            <span class="c2"
              >Write a short essay (500 words) on the importance of diversity and
              inclusion in the tech industry. Share your ideas for promoting gender
              diversity in tech through a blog on Medium/HashNode.</span
            >
          </li>
          <li class="c15 li-bullet-0">
            <span class="c0"
              >Design a poster or infographic that raises awareness of a specific
              women&#39;s issue.</span
            ><span class="c2"
              >&nbsp;The poster or infographic should be visually appealing and easy
              to understand, and it should communicate the student&#39;s message in
              a clear and concise way. Include the poster or infographic in the blog
              you&rsquo;ve written in step (i).</span
            >
          </li>
          <li class="c6 li-bullet-0">
            <span class="c0"
              >Launch a podcast to share stories and insights from women in and
              around you, highlighting their challenges and try coming up with
              solutions or talk through them, making them feel better.</span
            ><span class="c2"
              >&nbsp;This could be a great way to inspire other women and raise
              awareness of the challenges and opportunities that women face in the
              organization.</span
            >
          </li>
        </ol>
        <ul class="c3 lst-kix_gznf9rx5hs26-1">
          <li class="c5 li-bullet-0">
            <span class="c4">Take the help of AI, if you need, </span
            ><span class="c0">only for the first two tasks</span
            ><span class="c2">.</span>
          </li>
        </ul>`:``}
        ${req.query.isoperations == 'true' ? `<ol class="c3 lst-kix_gznf9rx5hs26-0" start="8">
          <li class="c1 li-bullet-0"><span class="c0 c9">Operations: </span></li>
        </ol>
        <ul class="c3 lst-kix_gznf9rx5hs26-1 start">
          <li class="c5 li-bullet-0">
            <span class="c0">Task</span
            ><span class="c2"
              >: Please share your thoughts on how effectively you would like to
              plan the event for the upcoming Info Session that we are going to
              have, where we will officially on-board you as the Core Team Member of
              the College. We will have to welcome and introduce everyone for the
              Google Developer Student Club to our College.</span
            >
          </li>
          <li class="c5 li-bullet-0">
            <span class="c2">Some Pro tips you could include :</span>
          </li>
        </ul>
        <ol class="c3 lst-kix_gznf9rx5hs26-2 start" start="1">
          <li class="c6 li-bullet-0"><span class="c2">Audience at target</span></li>
          <li class="c6 li-bullet-0">
            <span class="c2">Guests that you would like to invite</span>
          </li>
          <li class="c6 li-bullet-0">
            <span class="c2">Exciting Goodies and Swags</span>
          </li>
          <li class="c6 li-bullet-0">
            <span class="c2">Sponsors you have a target for</span>
          </li>
          <li class="c6 li-bullet-0"><span class="c2">Venue</span></li>
          <li class="c6 li-bullet-0">
            <span class="c2">How do you plan for the photoshoot</span>
          </li>
          <li class="c6 li-bullet-0">
            <span class="c2">Organization and Planning</span>
          </li>
        </ol>
        <ul class="c3 lst-kix_gznf9rx5hs26-1">
          <li class="c5 li-bullet-0">
            <span class="c2"
              >These could be some aspects that you could include in your essay.
              However, it&#39;s all up to your free thoughts, you can share whatever
              is in your mind, you can also share your experience of conducting an
              event as well (if you have any).</span
            >
          </li>
          <li class="c5 li-bullet-0">
            <span class="c2"
              >There is no word limit, you are free to write whatever you wish
              to.</span
            >
          </li>
        </ul>`:``}
        ${req.query.iscreatives == 'true' ? `<ol class="c3 lst-kix_gznf9rx5hs26-0" start="9">
          <li class="c1 li-bullet-0"><span class="c9 c0">Creatives:</span></li>
        </ol>
        <ul class="c3 lst-kix_gznf9rx5hs26-1 start">
          <li class="c5 li-bullet-0">
            <span class="c0">Task</span><span class="c2">:</span>
          </li>
        </ul>
        <ol class="c3 lst-kix_gznf9rx5hs26-2 start" start="1">
          <li class="c6 li-bullet-0">
            <span class="c2"
              >Create an instagram post welcoming everyone for the Google Cloud
              Study Jams.</span
            >
          </li>
          <li class="c6 li-bullet-0">
            <span class="c2"
              >Make a short reel about the GDSC Program that we are going to have in
              our college.</span
            >
          </li>
          <li class="c6 li-bullet-0">
            <span class="c2"
              >Prepare an infographic sharing your findings and learnings.</span
            >
          </li>
        </ol>
        <ul class="c3 lst-kix_gznf9rx5hs26-1">
          <li class="c5 li-bullet-0">
            <span class="c2"
              >Make sure you use only the Google Colors and Google Fonts. Do Google
              about finding what they are :)</span
            >
          </li>
        </ul>`:``}
        ${req.query.ismarketing == 'true' ? `<ol class="c3 lst-kix_gznf9rx5hs26-0" start="10">
          <li class="c1 li-bullet-0">
            <span class="c9 c0">Marketing and Social Media:</span>
          </li>
        </ol>
        <ul class="c3 lst-kix_gznf9rx5hs26-1 start">
          <li class="c5 li-bullet-0">
            <span class="c0">Task</span
            ><span class="c2"
              >: Create and execute a social media post promoting the upcoming Cloud
              Study Jams (https://cloudonair.withgoogle.com/cloud-study-jam).
              Analyze engagement metrics (likes, shares, comments) and tell us what
              are your ideas on reaching out to the audience, and your learnings and
              findings through a blog on Medium/HashNode. You can go through the
              different GDSC pages of different colleges on Instagram and then share
              your thoughts based on that. (You can find various accounts of GDSC if
              you go and find in the following section of our college instagram
              handle i.e, gdsc.gitam_vizag)</span
            >
          </li>
        </ul>`:``}
        ${req.query.ispr == 'true' ? `<ol class="c3 lst-kix_gznf9rx5hs26-0" start="11">
          <li class="c1 li-bullet-0">
            <span class="c9 c0">Public Relations:</span>
          </li>
        </ol>
        <ul class="c3 lst-kix_gznf9rx5hs26-1 start">
          <li class="c5 li-bullet-0">
            <span class="c0">Task</span
            ><span class="c2"
              >: Pay close attention to the upcoming GUSAC carnival and the
              preparations surrounding it. If you are not actively participating in
              the festival, gather pertinent information about the event, including
              any notable achievements and statistics, from fellow attendees. Use
              this information to craft a press release or news article spanning 300
              to 500 words through a blog on Medium/HashNode. The article should
              capture the enthusiasm and interest displayed by students in
              participating in the GUSAC carnival, delve into its organization, and
              provide a succinct summary of the event&#39;s significance.</span
            >
          </li>
        </ul>`:``}
        ${req.query.iscontent == 'true' ? `<ol class="c3 lst-kix_gznf9rx5hs26-0" start="12">
          <li class="c1 li-bullet-0"><span class="c9 c0">Content:</span></li>
        </ol>
        <ul class="c3 lst-kix_gznf9rx5hs26-1 start">
          <li class="c5 li-bullet-0">
            <span class="c0">Task</span
            ><span class="c2"
              >: Pick up one of your interesting tech domains and write an article,
              publish it on Medium or HashNode.</span
            >
          </li>
          <li class="c5 li-bullet-0">
            <span class="c2"
              >If you are new to these platforms, do check out and create your
              profile here!</span
            >
          </li>
        </ul>
        <ol class="c3 lst-kix_gznf9rx5hs26-2 start" start="1">
          <li class="c6 li-bullet-0">
            <span class="c4 c24"
              ><a
                class="c16"
                href="https://www.google.com/url?q=https://medium.com/&amp;sa=D&amp;source=editors&amp;ust=1696917633295885&amp;usg=AOvVaw1eFCtCyCuRMHZyG_PmkkvI"
                >https://medium.com/</a
              ></span
            >
          </li>
          <li class="c6 li-bullet-0">
            <span class="c24 c4"
              ><a
                class="c16"
                href="https://www.google.com/url?q=https://hashnode.com/&amp;sa=D&amp;source=editors&amp;ust=1696917633296176&amp;usg=AOvVaw1RqSj4QysMza5pTIRL-oGy"
                >https://hashnode.com/</a
              ></span
            ><span class="c2">&nbsp;</span>
          </li>
        </ol>
        <ul class="c3 lst-kix_gznf9rx5hs26-1">
          <li class="c5 li-bullet-0">
            <span class="c2">Research and provide valuable insights.</span>
          </li>
        </ul>`:``}
        ${req.query.islogistics == 'true' ? `<ol class="c3 lst-kix_gznf9rx5hs26-0" start="13">
          <li class="c1 li-bullet-0">
            <span class="c9 c0">Event Management (Logistics):</span>
          </li>
        </ol>
        <ul class="c3 lst-kix_gznf9rx5hs26-1 start">
          <li class="c5 li-bullet-0">
            <span class="c0">Task</span
            ><span class="c2"
              >: Plan a hypothetical tech event, including venue selection, budget
              estimation, vendor selection for food and banners, their address, and
              a rough schedule. Create a comprehensive event proposal.</span
            >
          </li>
        </ul>`:``}
        ${req.query.ishost == 'true' ? `<ol class="c3 lst-kix_gznf9rx5hs26-0" start="14">
          <li class="c1 li-bullet-0"><span class="c9 c0">Hosts:</span></li>
        </ol>
        <ul class="c3 lst-kix_gznf9rx5hs26-1 start">
          <li class="c5 li-bullet-0">
            <span class="c0">Task</span
            ><span class="c2"
              >: Write a short speech welcoming the guest for the Info Session that
              we are going to have soon in our college, where we are going to
              officially on-board you as the Core Team Members for the GDSC Club.
              Record a short video (1-2 minutes) introducing yourself and the Google
              Developer Student Clubs chapter. Showcase your hosting skills and
              charisma.</span
            >
          </li>
        </ul>`:``}
        ${req.query.isphotography == 'true' ? `<ol class="c3 lst-kix_gznf9rx5hs26-0" start="15">
          <li class="c1 li-bullet-0">
            <span class="c9 c0">Photography and Videography:</span>
          </li>
        </ol>
        <ul class="c3 lst-kix_gznf9rx5hs26-1 start">
          <li class="c5 li-bullet-0">
            <span class="c0">Task</span
            ><span class="c4"
              >: Capture high-quality photos or create a short video montage (1-2
              minutes) highlighting a recent tech event or project. Edit and present
              the visuals effectively.</span
            >
          </li>
        </ul>`:``}
        <p class="c11">
        <span class="c2"
            >Information on how to submit your task will be shared by this Friday, 13th October 2023, 11:59PM. 
          </span>
          <span class="c2"
            >If you still face any issue, you can contact one of the following:
          </span>
        </p>
        <p class="c11"><span class="c2">Satwik Varma - +91 83092 74420</span></p>
        <p class="c11">
          <span class="c4">Mohan Satya K. &nbsp;- +91 80081 57076</span>
        </p>
        <p class="c7"><span class="c2"></span></p>
        <p class="c12"><span class="c2">Best regards,</span></p>
        <p class="c12"><span class="c4 c27">Manas Malla</span></p>
        <p class="c12">
          <span class="c4 c17">Google Developer Student Club Lead</span>
        </p>
        <p class="c22 c19">
          <span class="c23 c4">Gandhi Institute of Technology and Management</span>
        </p>
        <p class="c14 c19"><span class="c13 c4"></span></p>
        <p class="c12 c19">
          <span class="c0 c26">Phone:</span><span class="c0 c25">&nbsp;</span
          ><span class="c4 c23">+91 90591 45216</span>
        </p>
        <p class="c12 c19">
          <span class="c20 c0">https://gdsc.manasmalla.dev</span>
        </p>
        <p class="c12 c18 c19"><span class="c0 c20"></span></p>
        <p class="c12 c19">
          <span
            style="
              overflow: hidden;
              display: inline-block;
              margin: 0px 0px;
              border: 0px solid #000000;
              transform: rotate(0rad) translateZ(0px);
              -webkit-transform: rotate(0rad) translateZ(0px);
              width: 199.84px;
              height: 56.5px;
            "
            ><img
              alt=""
              src="https://gdsc.manasmalla.dev/headers-footers/footer.png"
              style="
                width: 199.84px;
                height: 57.18px;
                margin-left: -0px;
                margin-top: -0.34px;
                transform: rotate(0rad) translateZ(0px);
                -webkit-transform: rotate(0rad) translateZ(0px);
              "
              title=""
          /></span>
        </p>
      </body>
    </html>    
    `,
    };
    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.status(404).send(erro.toString());
      }

      transporter.close();
      return res.status(200).send(`Sent`);
    });
  });
});
