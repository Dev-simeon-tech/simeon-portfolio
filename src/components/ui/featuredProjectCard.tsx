import VisitIcon from "@/assets/Images/Icon-visit.svg?react";

type FeaturedProjectCardProps = {
  title: string;
  subTitle: string;
  content: string;
  imgPreview: string;
  link: string;
};

const FeaturedProjectCard = ({
  title,
  subTitle,
  content,
  imgPreview,
  link,
}: FeaturedProjectCardProps) => {
  return (
    <div className='lg:p-7 p-5 flex flex-col items-center max-w-[] lg:flex-row lg:*:w-1/2 gap-10 rounded-2xl bg-neutral-100'>
      <div className=' md:mx-auto rounded-xl overflow-hidden'>
        <img
          src={imgPreview}
          className='lg:w-full md:w-[35rem] hover:scale-110 transition-transform duration-200 '
          alt={`${title} preview`}
        />
      </div>

      <div className='flex justify-between flex-col'>
        <div>
          <h3 className='text-2xl lg:text-4xl'>
            <span className='font-neue-montreal-bold'>{title} - </span>
            {subTitle}
          </h3>
          <p className='pt-6 pb-10'>{content}</p>
        </div>

        <a href={link} target='_blank'>
          <button className='bg-neutral-200 flex visit-btn gap-2 rounded-lg px-8 py-3'>
            <p>View Site</p>
            <VisitIcon className='w-6 h-6 transition-transform duration-200' />
          </button>
        </a>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
