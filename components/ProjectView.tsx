import Image from "next/image";

type Project = {
  title: string;
  platform: string;
  description: string;
  images?: string[];
  videos?: {
    src: string;
    poster?: string;
  }[];
  github?: string;
  tools?: string[];
  points?: string[];
};

export default function ProjectView({ project }: { project: Project }) {
  return (
    <div className="max-w-4xl mx-auto pt-32 p-6 text-white space-y-10">

      {/* TITLE */}
      <div>
        <h1 className="text-3xl font-bold relative after:block after:w-16 after:h-1 after:bg-gradient-to-r after:from-emerald-400 after:to-cyan-400 after:rounded-full after:mt-2">
          {project.title}
        </h1>

        <p className="text-neutral-400 mt-4">
          {project.platform}
        </p>
      </div>

      {/* MEDIA GRID */}
      {(project.videos?.length || project.images?.length) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* VIDEOS */}
          {project.videos?.map((video, i) => (
            <video
              key={`video-${i}`}
              src={video.src}
              poster={video.poster ?? undefined} //optionnel -> ok
              controls
              className="w-full rounded-lg"
            />
          ))}

          {/* IMAGES */}
          {project.images?.map((img, i) => (
            <Image
              key={`image-${i}`}
              src={img}
              alt={project.title}
              width={1200}
              height={600}
              className="rounded-lg object-cover"
            />
          ))}

        </div>
      )}

      {/* DESCRIPTION */}
      <p className="text-neutral-300 leading-relaxed whitespace-pre-line">
        {project.description}
      </p>

      {/* TOOLS */}
      {project.tools && (
        <div>
          <h2 className="font-semibold mb-2">Tools used</h2>
          <ul className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <li
                key={tool}
                className="bg-neutral-800 px-3 py-1 rounded"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* POINTS */}
      {project.points && (
        <div>
          <h2 className="font-semibold mb-2">Key features</h2>
          <ul className="list-disc ml-5 text-neutral-300 space-y-1">
            {project.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      )}

      {/* GITHUB */}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          className="text-blue-400 underline"
        >
          GitHub repository
        </a>
      )}
    </div>
  );
}