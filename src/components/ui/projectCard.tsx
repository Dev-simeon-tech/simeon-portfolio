import VisitIcon from "@/assets/Images/Icon-visit.svg?react";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  imgPreview: string;
  link: string;
};
const ProjectCard = ({
  title,
  subtitle,
  imgPreview,
  link,
}: ProjectCardProps) => {
  return (
    <div className='bg-neutral-100 flex flex-col px-4 py-5 rounded-3xl gap-8'>
      <div className='rounded-xl overflow-hidden'>
        <img
          className='w-full hover:scale-110 transition-transform duration-200'
          src={imgPreview}
          alt={`${title} preview`}
        />
      </div>
      <div className='flex justify-between '>
        <div>
          <h3>{title}</h3>
          <p className='pt-2'>{subtitle}</p>
        </div>
        <a href={link} target='_blank'>
          <button
            aria-label={`visit ${title} site`}
            className='p-2 visit-btn rounded-[50%] bg-neutral-200 '
          >
            <VisitIcon className='w-11 h-11 transition-transform duration-200' />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
