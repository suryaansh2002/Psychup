import React from "react";
import cmp from "../../images/logician.png";

export default function Logician() {
  return (
    <>
      <h1 id="article-heading_1-0" class="comp article-heading">
        Logician-INTP: The Thinker
      </h1>
      <div className="bubble-container">
        <div className="p-bubble c1">Introverted</div>
        <div className="p-bubble c2">Intuitive</div>
        <div className="p-bubble c3">Thinking</div>{" "}
        <div className="p-bubble c4">Perceiving</div>
      </div>
      <div>
        <img src={cmp} className="pers-img" />
      </div>
      <div className="pers-box c5">
        <p className="p1">
          <span>
            INTP (introverted, intuitive, thinking, perceiving) is one of the 16
            personality types described by the{" "}
          </span>
          <a href="https://www.verywellmind.com/the-myers-briggs-type-indicator-2795583">
            <span>Myers-Briggs Type Indicator (MBTI)</span>
          </a>
          <span>.</span>
          <span>
            <span>1</span>
          </span>
          <span>
            People who score as INTP are often described as quiet and
            analytical. They enjoy spending time alone, thinking about how
            things work, and coming up with solutions to problems. INTPs have a
            rich inner world and would rather focus their attention on their
            internal thoughts rather than the external world. They typically do
            not have a wide social circle, but they do tend to be close to a
            select group of people.
          </span>
        </p>
        <p>
          <span>
            According to psychologist David Keirsey, creator of the Keirsey
            Temperament Sorter, approximately 1% to 5% of people have an INTP
            personality type.
          </span>
        </p>
      </div>
      <h2>
        <span>Key INTP Characteristics</span>
      </h2>
      <div className="pers-box c1">
        <ul className="ul1">
          <li>
            <p>
              <span>
                INTPs are quiet, reserved, and thoughtful. As introverts, they
                prefer to socialize with a small group of close friends with
                whom they share common interests and connections.
              </span>
            </p>
          </li>
          <li>
            <p>
              <span>
                They enjoy thinking about theoretical concepts and tend to value
                intellect over emotion. INTPs are logical and base decisions on
                objective information rather than subjective feelings.
              </span>
            </p>
          </li>
          <li>
            <p>
              <span>
                When analyzing data and making decisions, they are highly
                logical and objective.
              </span>
            </p>
          </li>
          <li>
            <p>
              <span>
                Tends to be flexible and good at thinking "outside of the box."
              </span>
            </p>
          </li>
          <li>
            <p>
              <span>
                People with this personality type think about the big picture
                rather than focusing on every tiny detail.
              </span>
            </p>
          </li>
          <li>
            <p>
              <span>
                INTPs like to keep their options open and feel limited by
                structure and planning.
              </span>
            </p>
          </li>
        </ul>
      </div>
      <div className="s-w c2">
        <p>
          <b>Strengths</b>
        </p>
        <ul>
          <li>
            <p>
              <span>Logical and objective</span>
            </p>
          </li>
          <li>
            <p>
              <span>Abstract thinker</span>
            </p>
          </li>
          <li>
            <p>
              <span>Independent</span>
            </p>
          </li>
          <li>
            <p>
              <span>Loyal and affectionate with loved ones</span>
            </p>
          </li>
        </ul>
      </div>
      <div className="s-w c2">
        <p>
          <b>Weaknesses</b>
        </p>
        <ul>
          <li>
            <p>
              <span>Difficult to get to know</span>
            </p>
          </li>

          <li>
            <p>
              <span>Prone to self-doubt</span>
            </p>
          </li>
          <li>
            <p>
              <span>Struggles to follow rules</span>
            </p>
          </li>
          <li>
            <p>
              <span>Has trouble expressing feelings</span>
            </p>
          </li>
        </ul>
      </div>

      <h2>
        <span>Cognitive Functions</span>
      </h2>
      <p className="pers-box c3">
        <span>
          The MBTI is based upon psychoanalyst Carl Jung's theory which suggests
          that personality is made up of different cognitive functions. The
          hierarchical order of these functions is what establishes personality
          and behavioral patterns. The dominant function is the one that plays
          the largest role in personality, although it is also supported by the
          auxiliary. The tertiary function is less developed, but still exerts
          some influence and becomes more pronounced as a person strengthens
          this area. The inferior function is largely unconscious but represents
          an area of weakness.
        </span>
      </p>
      <h2>
        <span>Dominant: Introverted Thinking</span>
      </h2>
      <p className="p1 pers-box c4">
        <span>
          This function focuses on how people take in information about the
          world. INTPs express this by trying to understand how things work.
          They often like to break down larger things or ideas to look at the
          individual components to see how things fit and function together.
          INTPs tend to be highly logical and efficient thinkers. They like to
          have a complete understanding of something before they are willing to
          share an opinion or take action.
        </span>
      </p>
      <h2>
        <span>Auxiliary: Extraverted Intuition</span>
      </h2>
      <p className="p1 pers-box c5">
        <span>
          INTPs express this cognitive function by exploring what-ifs and
          possibilities. They utilize insight, imagination, and past experiences
          to form ideas. They often go over what they know, seeking patterns
          until they can achieve a flash of inspiration or insight into the
          problem. They tend to spend a great deal of time thinking about the
          future and imagining all the possibilities.
        </span>
      </p>
      <h2>
        <span>Tertiary: Introverted Sensing</span>
      </h2>
      <p className="p1 c1 pers-box">
        <span>
          INTPs tend to be very detail-oriented, carefully categorizing all of
          the many facts and experiences that they take in. As they collect new
          information, they compare and contrast it with what they already know
          in order to make predictions about what they believe will happen next.
        </span>
      </p>
      <h2>
        <span>Inferior: Extraverted Feeling</span>
      </h2>
      <p className="p1 pers-box c2">
        <span>
          INTPs tend to seek harmony in groups. While they are introverted,
          INTPs can be quite outgoing when they are around people with whom they
          are familiar and comfortable. In situations where they feel stress,
          however, INTPs shut down their feelings and struggle to connect with
          others. Under stress, they tend to rely on logic rather than feelings.
        </span>
      </p>
      <h2>
        <span>INTPs You Might Know</span>
      </h2>
      <div className="pers-box c3">
        <ul className="ul1">
          <li>
            <p>
              <span>Albert Einstein, scientist</span>
            </p>
          </li>
          <li>
            <p>
              <span>Dwight D. Eisenhower, U.S. President</span>
            </p>
          </li>
          <li>
            <p>
              <span>Carl Jung, psychoanalyst</span>
            </p>
          </li>
          <li>
            <p>
              <span>Tiger Woods, golfer</span>
            </p>
          </li>
          <li>
            <p>
              <span>Sheldon Cooper, The Big Bang Theory</span>
            </p>
          </li>
        </ul>
      </div>

      <h2>
        <span>Personal Relationships</span>
      </h2>
      <div className="pers-box c4">
        <p className="p1">
          <span>
            As introverts, INTPs prefer spending time alone for the most part.
            Unlike{" "}
          </span>
          <a href="https://www.verywellmind.com/what-is-extroversion-2795994">
            <span>extraverts</span>
          </a>
          <span>
            , who gain energy from interacting with a wide group of people,
            introverts must expend energy in social situations.
          </span>
          <span>
            <span>2</span>
          </span>
          <span>
            After being around a lot of people, INTPs might feel like they need
            to spend some time alone to recharge and find balance. While they
            may be shy around people they do not know well, INTPs tend to be
            warm and friendly with their close group of family and friends.
          </span>
        </p>
        <p>
          <span>
            Because INTPs enjoy solitude and deep thinking, they sometimes
            strike others as aloof and detached. At times, people with this
            personality type can get lost in their own thoughts and lose track
            of the outside world. They love ideas and place a high value on
            intelligence and knowledge.
          </span>
        </p>
        <p>
          <span>
            In social situations, INTPs tend to be quite easy-going and
            tolerant. However, they can become unyielding when their beliefs or
            convictions are challenged. Their high emphasis on logic can make it
            difficult to not correct others in situations where other people
            present arguments that are not rational or logical. Because they
            rely on their own minds rather than others, they can also be very
            difficult to persuade.
          </span>
        </p>
      </div>

      <h2>
        <span>Career Paths</span>
      </h2>
      <div className="pers-box c5">
        <p className="p1">
          <span>
            Because they enjoy theoretical and abstract concepts, INTPs often do
            particularly well in science-related careers. They are logical and
            have strong reasoning skills, but are also excellent at thinking
            creatively.
          </span>
        </p>
        <p>
          <span>
            INTPs can be very independent and place a great deal of emphasis on
            personal freedom and autonomy. In some cases, they can be aggravated
            by authority figures, particularly those that they feel are trying
            to suppress their ability to think and act for themselves. Because
            of this, INTPs typically do best in careers as they have a great
            deal of flexibility and independence.
          </span>
        </p>
      </div>

      <h2>
        <span>Popular INTP Careers</span>
      </h2>
      <div className="pers-box c1">
        <ul className="ul1">
          <li>
            <p>
              <span>Chemist</span>
            </p>
          </li>
          <li>
            <p>
              <span>Physicist</span>
            </p>
          </li>
          <li>
            <p>
              <span>Computer programmer</span>
            </p>
          </li>
          <li>
            <p>
              <span>Forensic scientist</span>
            </p>
          </li>
          <li>
            <p>
              <span>Engineer</span>
            </p>
          </li>
          <li>
            <p>
              <span>Mathematician</span>
            </p>
          </li>
          <li>
            <p>
              <span>Pharmacist</span>
            </p>
          </li>
          <li>
            <p>
              <span>Software developer</span>
            </p>
          </li>
          <li>
            <p>
              <span>Geologist</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
