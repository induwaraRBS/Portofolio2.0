import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid-cols-2 gap-8">
          <div className=" pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              About
            </p>
          </div>
          <div></div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi,I'm Induwara Subasinghe, nice to meet you.Please take a look
                around.
              </p>
            </div>
            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates quos cupiditate neque omnis, corporis dolorum
                molestiae! Non suscipit ipsa temporibus minus commodi, laborum,
                expedita ullam ea molestias minima neque sapiente! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Veritatis ex
                numquam esse iure obcaecati, veniam inventore saepe quis
                nesciunt reiciendis! Illo quod nobis ratione dolores id! Fuga
                accusamus et porro!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
