import { about_data } from "src/data/about";
import person from "src/assets/Mohammad.png";
import { Github01Icon } from "hugeicons-react";

const About = () => {
  return (
    <div className="pt-20 max-w-[1440px] mx-auto">
      <h1 className="mb-8">{about_data.title}</h1>
      <p>{about_data.description}</p>

      <div>
        {about_data.list.map((item) => (
          <div className="mt-16">
            <h2 className="">{item.title}</h2>
            <p className="mb-5 mt-2">{item.description}</p>
            <ul className="gap-3 space-y-2 list-disc list-inside">
              {item.list.map((value) => (
                <li className="text-sm">
                  <span className="font-bold">{value.key}</span> <span className="c-gray">{value.value}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex rounded-full h-60 w-60 overflow-hidden mx-auto">
        <img src={person} className="object-cover translate-y-20 translate-x-20 scale-150 w-full h-full" alt="" />
      </div>
      <div className="flex justify-center w-full mt-4">
        <a href="" className="flex items-center gap-2 text-blue-500 mx-auto">
          Mohammad Esmaeilpour Github <Github01Icon size={20} />
        </a>
      </div>
    </div>
  );
};

export default About;
