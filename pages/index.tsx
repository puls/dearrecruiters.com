import Head from "next/head";

function HomePage() {
  return (
    <main>
      <Head>
        <title>Dear Recruiters:</title>
      </Head>
      <h1>Dear Recruiters:</h1>
      <p>
        Hi! It's your friendly local software engineer. You probably came across
        this link because you cold-emailed or cold-called me as a prospective
        candidate, and I asked you to visit this in lieu of a longer response.
      </p>
      <p>
        Look, we all understand how it works. Awesome companies are facing a
        talent crunch, and finding the most awesome software people out there is
        hard. Without recruiters like you, lots of great opportunities would
        fall through the cracks.
      </p>
      <p>
        And, honestly, even though many of us are happily employed right now,
        it's probably true that if a really, really compelling opportunity came
        along, we'd probably be interested in hearing more about it and
        exploring our options!
      </p>
      <p>
        <strong>Seriously, we like you.</strong>
      </p>
      <p>
        But here's the rub: unless you tell us exactly what company you're
        working for, it doesn't come across as a really compelling opportunity.
      </p>
      <p>
        Making vague references to the space doesn't help. Saying it's very
        successful doesn't help. Name-dropping the classiest VC firms in the
        world doesn't help.
      </p>
      <p>
        We realize that you're doing this because it prevents us from going
        straight to the company and circumventing your commission. But that's
        really not how it comes across.
      </p>
      <p>
        What comes across is that the company is so lame that only the seriously
        desperate need apply. And if it's a company full of desperate people,
        it's probably not a compelling opportunity.
      </p>
      <p>
        <strong>
          Please, for the love of all that is holy, lead with the company's
          name.
        </strong>
        &nbsp; That's all we ask.
      </p>
      <hr />
      <p className="footer">
        <a href="http://dearrecruiters.com">DearRecruiters.com</a> is a free
        service from <a href="http://twitter.com/puls">@puls</a>. Shout out to
        <a href="http://thanksno.com">ThanksNo.com</a> for the inspiration.
        Obviously, the prospective candidate you emailed didn't personally write
        this, but it's the sentiment that counts.
      </p>
    </main>
  );
}

export default HomePage;
