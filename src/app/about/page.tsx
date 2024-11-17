export default function Page() {
  return (
    <header className="ctaBg mt-[1rem] px-[23px] flex items-center justfy-center flex-col md:px-[60px]  lg:px-[9rem]">
      <h1 className="text-[70px] font-bold text-center">About Me</h1>

      <div className="grid grid-cols-[7%_93%] items-start gap-[0rem] w-[100%]">
        {/* <p className="bg-red-400 w-[100%] h-fit rotate-text text-[10px]">
          REASEARCH DEVELOPMENT DESIGNING
        </p> */}

        <div className="bg-bue-300 w-[30px] h-[100vh] flex items-start justify-start">
          <p className="b-red-400 w-[100%] h-fit rotate-text text-[10px]">
            REASEARCH DEVELOPMENT DESIGNING
          </p>
        </div>

        <div className="b-red-600 w-[100%]">
          <p className="mb-4 text-left">
            I am a Website Developer, I create captivating content that visually
            articulates the brand&apos;s ideas and goals, specializing in sports
            designs for social media platforms. With the help of Adobe
          </p>

          <p className="mb-4 text-left">
            Creative Suite, motion graphics, and video editing, I convey
            emotions, evoke feelings, and narrate stories through the art form.
            I have won multiple community awards for my outstanding sports
            designs, such as posters, logos, flyers, and banners, that have
            generated high engagement and positive feedback from the audience.
          </p>

          <p className="mb-4 text-left">
            I am also pursuing a Bachelor&apos;s degree in Agricultural and
            Environmental Engineering from the University of Ibadan, which will
            enable me to apply my technical skills and knowledge to my design
            projects.
          </p>

          <p className="mb-4 text-left">
            I am passionate about photography and appreciate the intricacies and
            aesthetics of the medium. I collaborate with clients and colleagues
            to address visual challenges and deliver high-quality results. I
            constantly seek to learn new tools and techniques to enhance my
            creativity and productivity. My goal is to become a versatile and
            innovative designer who can make an impact in the sports industry. I
            aim to become a versatile and innovative designer who can impact in
            the sport design industry
          </p>
        </div>
      </div>
    </header>
  );
}
