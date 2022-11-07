export default function examplePage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Hey, I'm Alexander Nguyen</h1>
          </div>
          <img
            className='pic'
            src='https://pbs.twimg.com/profile_images/415961110635110400/xPO9YqTC.https://cdn.inst-fs-iad-prod.inscloudgate.net/54241a28-17b2-470c-96ea-eaec86f4f03a?token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6ImNkbiJ9.eyJyZXNvdXJjZSI6Ii81NDI0MWEyOC0xN2IyLTQ3MGMtOTZlYS1lYWVjODZmNGYwM2EiLCJ0ZW5hbnQiOiJjYW52YXMiLCJ1c2VyX2lkIjpudWxsLCJpYXQiOjE2Njc3NjA2OTEsImV4cCI6MTY2Nzg0NzA5MX0.ucL41D-hCg8ueokLf5OWNPrnJNk5AgXiMxaU4RKQAIqB08GV1vuY3AudG9Zaz7YkpiVMDpiBTixIPvI5InjVDw&content_type=image%2Fpng'
            alt='alex nguyen'
          />

          <p className='description'>
            I'm currently commuting at CU Boulder as a freshman and I
            enjoy playing video games such as Valorant and Overwatch. I'm
            deeply interested in Virtual Reality and tend to spend a lot on Reddit
            scrolling braindead while listening to synthwave music.
          </p>

          <a className='button' href='/'>
            <p> Back to Home Page</p>
          </a>
        </main>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .pic {
            height: 450px;
            width: 450px;
          }

          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}