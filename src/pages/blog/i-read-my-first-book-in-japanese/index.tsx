import React from "react"
import styled from "styled-components"

import { COLOR } from "../../../styles/tokens"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Figure from "../../../components/figure-image"

import animalCrossing from "./images/animal-crossing.jpg"
import averageLanguagesSpoken from "./images/average-languages-spoken.jpg"
import kanji from "./images/kanji.png"
import sortingHat from "./images/sorting-hat.jpg"
import illustratedBook from "./images/illustrated-book.jpg"
import spreadsheet from "./images/spreadsheet.png"
import readingStatsBySession from "./images/reading-stats-by-session.png"
import readingStatsByChapter from "./images/reading-stats-by-chapter.png"
import severusSnape from "./images/severus-snape.jpg"
import hogwartsOwls from "./images/hogwarts-owls.webp"

const Small = styled.small`
  color: ${COLOR.ACCENT.DARK_GREY};
`

const BlogPost = () => (
  <Layout>
    <SEO
      title="I read my first book in Japanese 🎉"
      description="My 2020 goal was to read Harry Potter and the Philosopher’s Stone (or ハリー・ポッターと賢者の石) by the end of the year. Two weeks ago, I accomplished this goal."
      image={illustratedBook}
    />
    <h1>I read my first book in Japanese 🎉</h1>
    <Small>Jan 10, 2021 ・ 9 min read</Small>
    <p>
      Last year, I embarked on a journey to learn Japanese. I set myself an
      objective to read Harry Potter and the Philosopher’s Stone (or
      ハリー・ポッターと賢者の石) by the end of 2020. Two weeks ago, I
      accomplished this goal. In this post, I describe my journey so far,
      approach to reading, and will present some fun stats and graphs I recorded
      along the way.
    </p>
    <p>
      Back in April, I suddenly found myself with a lot more time on my hands.
      The UK was under strict lockdown. Not having to commute to work,
      socialise, or even go outside at all, meant I gained several hours a day.
      At first, I spent all that extra time playing Animal Crossing (
      <small>200 hours within the first month of its release</small>). On my
      third attempt to landscape my Animal Crossing island, I stopped. I was
      wasting an opportunity. If there was any time to reignite my interest in
      learning Japanese, this was it.
    </p>
    <Figure
      src={animalCrossing}
      alt="In-game screenshot of me playing Animal Crossing"
      caption="Taking a quick break after many hours of grueling construction work."
    />
    <p>
      My previous attempts to study the language were largely unsuccessful. I
      dabbled a bit with language learning apps and lost interest quite quickly.
      Even though I am fortunate enough to understand a fair amount of Japanese
      already (thanks, mum), I just didn’t have much experience or confidence in
      being able to acquire a new language. My time learning French and German
      at school taught me that I could rote-learn vocabulary lists, memorise a
      script by heart and get decent exam results. But I didn’t retain any of
      that information a month later let alone years after I left school. The
      lesson I took away from it all was that{" "}
      <em>I just wasn’t suited to languages</em>. Plus, I didn’t find it very
      interesting either.
    </p>
    <p>
      Nevertheless, I was committed to give learning Japanese a proper go. It
      felt like I would be foresaking my heritage if I didn't.
    </p>
    <p>
      So, my self-directed language learning journey began with{" "}
      <em>learning how to learn</em>. I quickly realised, though it should have
      been obvious before, that picking up a second language isn’t anything
      special. Most sources say that over half of the world’s population is
      multilingual. Clearly, I didn’t need to be gifted or attuned to languages.
      I just needed time, dedication, and effective learning methods.
    </p>
    <Figure
      src={averageLanguagesSpoken}
      alt="A map of the European Union"
      caption={
        <>
          Average number of languages spoken in the EU by country. Source:{" "}
          <cite>
            <a
              href="https://jakubmarian.com/map-of-the-percentage-of-people-speaking-english-in-the-eu-by-country/"
              target="_blank"
            >
              Jakub Marian
            </a>
          </cite>
        </>
      }
    />
    <p>
      I also discovered that it isn’t generally recommended to learn a language
      in the way I was taught at school. Rote-learning vocabulary lists and
      studying textbooks only get you so far. At some point you need to confront
      what you’ve learned in the real world. This can transform the vague,
      tenuous connections you have between foreign sounds and meaning in your
      native language into something concrete and meaningful in its own right.
      It’s that extra step between knowing that the bunch of lines 青 can mean
      “green” <em>or</em> “blue” and having the correct colour wash over you,
      without thought, when seeing that character in context. For that, you need
      to immerse yourself in the language and be exposed to the vast variety of
      ways each kanji, word, grammar point, etc. can be used.
    </p>
    <p>
      This approach to language learning seemed very appealing. If I could pick
      up Japanese just by reading stuff in Japanese and listening to stuff in
      Japanese, that sounds like I could actually enjoy myself.
    </p>
    <p>
      At the start of April, I set my focus on improving my reading ability.
      Doing so would unlock a whole world of material to immerse myself in. But
      I was starting from pretty much square one. Japanese has three writing
      systems - hiragana, katakana and kanji. The first two I knew well enough
      at the time, there are only 46 characters in each. Kanji, on the other
      hand, is a whole other beast and has thousands of characters with multiple
      ways to read and understand each of them. I was familiar with about 20
      kanji at the time. The average Japanese adult can read <em>over 3000</em>.
    </p>
    <Figure
      src={kanji}
      alt="12 blocks of 100 individual kanji"
      caption={
        <>
          Here's just 1200 of the{" "}
          <cite>
            <a
              href="https://upload.wikimedia.org/wikipedia/commons/1/11/3002_Kanji.svg"
              target="_blank"
            >
              3002 most common kanji
            </a>
          </cite>
        </>
      }
    />
    <p>
      So, knowing that I wanted to get better at reading, I just needed a
      direction to work towards. This goal of reading Harry Potter became my
      lighthouse and gave purpose to all the other studies I was undertaking.
    </p>
    <p>
      Of course, I didn’t just spend the past 8 months slowly working through
      the book. Before I could even get started on the first page, I spent half
      a year buried in textbooks, reading short form text such as{" "}
      <cite>
        <a href="https://www3.nhk.or.jp/news/easy/" target="_blank">
          NHK Easy News
        </a>
      </cite>{" "}
      articles, and reviewing kanji and vocab using{" "}
      <cite>
        <a
          href="https://en.wikipedia.org/wiki/Spaced_repetition"
          target="_blank"
        >
          spaced repetition
        </a>
      </cite>{" "}
      techniques. In future, I might write another post going over the resources
      and methods I used in more detail. But for now, I’ll focus on how I
      tackled reading my first book in Japanese. 📖
    </p>
    <h2>Why Harry Potter?</h2>
    <p>
      Learning a new language unlocks a whole new world of rich content to
      explore. It’s the reason a lot of people study a new language in the first
      place. So, you might be wondering why I chose a book that’s originally
      written in English. A story I’m already very familiar with and wouldn’t be
      getting much out of by reading it again in its impure, translated form.
    </p>
    <p>
      Discovering a new narrative wasn't the reason I chose Harry Potter. I
      simply wanted to get better at Japanese. And it’s much easier to get
      started with something that you are already familiar with.
    </p>
    <p>
      For starters, you have a lot of context to full back on. I might come
      across the phrase 組み分け帽子 and upon checking the dictionary, would
      discover that the first part (組み分け) means “division into groups” and
      the second (帽子) means “hat”. Without any knowledge of Harry Potter, this
      is quite a cryptic phrase and could leave you scratching your head for a
      while. For those of us that know the story, it’s easy to recognise “Oh,
      it’s the Sorting Hat!” This meant I had no trouble with made-up names and
      phrases (which there are a lot of in Harry Potter). These nuggets of
      knowledge also acted as anchors in the story that would help me verify if
      I was understanding the text correctly.
    </p>
    <Figure
      src={sortingHat}
      alt="Harry Potter getting sorted"
      caption="Anything but Slytherin, anything but Slytherin."
    />
    <p>
      Likewise, I don’t have a great tolerance for ambiguity. I like to make
      sure I’m understanding every sentence, every detail when I’m taking
      something in. This sense of unease, that I’m missing something, is hard to
      overcome if you’re reading in a language you're not confident in. Better
      to start with a tale you already know.
    </p>
    <p>
      As an aside, I also got my hands on a beautiful illustrated version of the
      book which has charming depictions of the magical world on every other
      page. This, again, helped set the scene and gave me clues to how the story
      was developing.
    </p>
    <Figure
      src={illustratedBook}
      alt="Illustration verison of Harry Potter and the Philosopher's Stone"
      caption="It's so pretty."
    />
    <h2>Tracking my progress</h2>
    <p>
      I decided I would track my progress during my time reading Harry Potter.
      Things I wanted to track included how many kanji and words I was looking
      up as well as how long it was taking me to read each page. I knew I would
      be slow, much much slower than if I was reading in English so I needed a
      way to keep motivated. Having visibility over my improvement over time
      became that motivator. Knowing that, even if I’m going at a snail’s pace
      reading this children’s book, I am at least a lot faster than when I
      started out.
    </p>
    <p>
      How would I track these stats? Whenever I sat down to read Harry Potter, I
      used a stopwatch to record how long I was reading for. I also had a
      spreadsheet where I would enter each word or kanji I looked up. After each
      reading session, I would fill in the number of pages I read, the length of
      time, and the number of lookups.
    </p>
    <Figure
      src={spreadsheet}
      alt="Screenshot of my spreadsheet"
      caption="My very ugly spreadsheet."
    />
    <p>
      It was all fairly manual. At some point I would like to build an app that
      automates a lot of this for me.{" "}
      <small>
        But this might just sit atop my list of projects that I never actually
        start. 🙈
      </small>
    </p>
    <h2>Results</h2>
    <h3>How long it took me</h3>
    <ul>
      <li>75 reading sessions</li>
      <li>62 hours</li>
      <li>Across 2 months</li>
    </ul>
    <h3>How many lookups</h3>
    <ul>
      <li>3366 unique words / 4738 total words</li>
      <li>565 unique kanji / 975 total kanji</li>
    </ul>
    <p>
      As you can see, it took me a <em>long time</em> to read Harry Potter and
      the Philosopher's Stone. To put it into perspective, I could have read
      over ten English novels in that time. But I expected that going into this
      journey. What I was more concerned about was whether I became a better
      reader over those 62 hours. And the answer was a definitive <em>yes</em>.
    </p>
    <Figure
      src={readingStatsBySession}
      alt="Graph showing my reading stats by session"
    />
    <p>
      The first page took me an <em>hour and a half</em> to read. But I improved
      quickly and dramatically. My average reading speed reduced to 51 minutes
      per page by the end of the first chapter. In the final chapter, I was
      reading at a pace of 11 minutes a page.
    </p>
    <Figure
      src={readingStatsByChapter}
      alt="Graph showing my reading stats by chapter"
    />
    <p>
      The rate of lookups tells a similar story. The first chapter had me
      looking up an average of 45 words and 14 kanji per page. Whereas, in the
      final chapter, I only needed to look up 13 words and 3 kanji per page. The
      decreased rate of lookups wasn’t the only reason my reading speed was
      increasing either. I was also getting better at distinguishing individual
      words within a sentence and acclimatising myself to the grammar.
    </p>
    <p>
      One thing I hadn't predicted was my stamina growth. I started off only
      being able to read half a page at a time. Despite being very motivated (it
      was what the previous six months were leading up to after all), I found it
      draining enough that I needed to take a break after 30-40 minutes. By
      chapter ten, I could read whole chapters in a single sitting, spending
      almost three hours doing so.
    </p>
    <p>
      And yet, progress wasn’t always linear. I clearly had some setbacks.
      Notably, in chapter eight, we spend a lot of time with the infamous
      Severus Snape. His style of speech harder was a lot harder to decipher
      than the other characters, not least because of his liberal use of obscure
      kanji.
    </p>
    <Figure
      src={severusSnape}
      alt="Severus Snape forcing Ron and Harry to study"
      caption="Professor, I'm trying my best!"
    />
    <p>
      This was an important lesson I learned. From chapter to chapter, page to
      page, even sentence to sentence, the difficulty of the text you’re reading
      is going to fluctuate. And yet, it’s easy to lose sight of that in the
      moment. You might read a difficult text and think you’re not making any
      headway. But if you take a step back to view your journey over a wider
      time frame, it’s easy to see that you really are making progress. Tracking
      my stats helped me to gain that perspective. I could recognise that
      chapter eight was just a bump in the road (or spike in the graph) in my
      quest to get better.
    </p>
    <p>
      Overall, I am pretty pleased with the progress I made. Not all of it is
      going to translate to the next book I read (I’ll be surprised if I come
      across as many breeds of owls any time soon). But there should be some
      knowledge that carries over - common words and kanji, familiarity with
      grammar, and perhaps most importantly, the confidence that no matter how
      painful a book is to start with, I can make significant strides if I stick
      with it.
    </p>
    <Figure
      src={hogwartsOwls}
      alt="Watercolour of Hogwarts and two owls flying ahead"
    />
    <p>
      This year, my goal is to read <em>two Japanese books a month</em>! I will
      continue tracking my reading stats and hope to report back once I’ve read
      more.
    </p>
  </Layout>
)

export default BlogPost
