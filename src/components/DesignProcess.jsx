export default function DesignProcess() {
    const steps = [
      {
        title: "Flawless Execution Process",
        description:
          "We believe that exceptional design is only as powerful as its execution. Our flawless process orchestrates every element—from the finest materials to the final flourish—ensuring a seamless transformation with regal precision.",
      },
      {
        title: "Creating Inspired Interiors",
        description:
          "Rooted in artistry, grace, and purpose, our design philosophy weaves creativity with sophistication. Each space we create becomes a bespoke expression of your taste, blending timeless elegance with contemporary refinement.",
      },
      {
        title: "Crafting Perfection Step-by-Step",
        description:
          "Design is not merely an end—it is a journey of thoughtful decisions and inspired craftsmanship. With a step-by-step approach tailored to perfection, we curate each phase to reflect excellence worthy of the grandest visions.",
      },
    ];
  
    return (
      <section className="bg-ivory px-6 md:px-20 py-16 flex flex-col lg:flex-row gap-10 items-center">
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Kitchen Living"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
  
        <div className="w-full lg:w-1/2">
        <span className="uppercase tracking-wider font-medium text-sm inline-flex items-center gap-2 mb-4">
            <div className="w-7 h-7 bg-black"></div>
            Process
          </span>
          <h1 className="text-5xl font-medium mb-6 text-[#1c1c1c]">Our Design Process</h1>
          <p className="text-gray-700 mb-10">
          We embrace a meticulously curated yet adaptive approach to transform your vision into a living masterpiece. Our design journey begins with an in-depth consultation, where we immerse ourselves in your distinct style, ensuring every detail is a true reflection of your refined taste.
          </p>
  
          <div className="space-y-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-400 text-center font-medium text-black flex items-center justify-center">
                    {idx + 1}
                  </div>
                  {idx !== steps.length - 1 && (
                    <div className="w-px h-full bg-gray-400 mt-1" />
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1c1c1c]">{step.title}</h4>
                  <p className="text-gray-700 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  