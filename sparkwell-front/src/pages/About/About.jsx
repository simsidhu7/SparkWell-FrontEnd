import "../../App.scss";
import "../About/About.scss";
import journalImage from "../../assets/images/Journaling.jpeg";

function About() {
  return (
    <div className="about">
      <div className="about__app">
        <h2 className="about__title">About SparkWell</h2>
        <p className="about__benefits">
          Spark your wellness and self-care journey! Reflecting on your mood and
          processing emotions is a core aspect of{" "}
          <span className="about__company">SparkWell</span>, as it offers
          numerous benefits, including increased self-awareness, emotional
          regulation, improving mental health, enhanced communication, personal
          growth, and productivity. By fostering mindfulness and helping users
          recognize emotional patterns, the app empowers individuals to build
          healthier habits and maintain balance in their lives.{" "}
        </p>

        <img
          className="about__journaling-image"
          src={journalImage}
          alt="Journaling Cartoon"
        />
      </div>
      <div className="about__creator">
        <h2 className="about__title">Behind the Concept</h2>
        <p className="about__sparkwell">
          {" "}
          Simmy Sidhu, a Biomedical and Software Engineer, developed{" "}
          <span className="about__company">SparkWell</span> to spark self-care,
          enhance wellness, and foster inclusivity. The app is thoughtfully
          designed to support everyone in achieving emotional well-being, while
          also addressing the unique challenges faced by neurodivergent
          individuals who may struggle with planning and emotional expression.
          Simmy’s vision for SparkWell was to create a platform that is simple,
          practical, and accessible for all users, regardless of their
          individual needs or experiences. Many wellness apps on the market tend
          to focus on flashy, complex features that can overwhelm users. Whether
          it’s intricate navigation menus, overcrowded dashboards, or
          overwhelming customization options, these apps often fail to provide
          the straightforward tools people need to incorporate into their daily
          lives. For neurodivergent individuals - such as those with ADHD,
          autism, or anxiety - this complexity can feel especially frustrating,
          leading many to abandon the apps entirely.{" "}
          <span className="about__company">SparkWell</span> bridges this gap by
          offering a streamlined, intuitive experience that works for everyone.
        </p>{" "}
        <p className="about__sparkwell-contd">
          {" "}
          The concept for <span className="about__company">SparkWell</span> goes
          beyond creating just another wellness app. It is designed to help
          users develop self-awareness, manage emotions, and build healthier
          habits through simple, intuitive features that fit seamlessly into
          everyday life. At its core,{" "}
          <span className="about__company">SparkWell</span> encourages users to
          reflect on their mood, fostering emotional awareness and personal
          growth. By prompting users to input journal entries, the app allows
          them to express their thoughts and feelings, while also offering the
          ability to revisit these entries later, complete with timestamps, to
          reflect on their journey and release emotions that no longer serve
          them.
          <span className="about__company"> SparkWell</span> also promotes
          physical well-being by encouraging users to track their daily water
          intake. Staying hydrated is a small yet powerful habit that can
          improve mental clarity, energy levels, and overall mood. This
          integration of mindfulness with practical self-care routines ensures
          that users can take steps toward both emotional and physical wellness
          in one unified platform. Simmy designed{" "}
          <span className="about__company">SparkWell</span> with the
          understanding that wellness is a holistic process. By combining
          features for emotional reflection, journaling, and hydration tracking,
          the app creates a space where users can build mindfulness,
          self-awareness, and healthier habits. Whether you’re seeking to
          understand your emotions, find clarity in your thoughts, or maintain
          balance in your daily routine,{" "}
          <span className="about__company">SparkWell</span> is there to guide
          and empower you every step of the way.
        </p>
      </div>
    </div>
  );
}
export default About;
