import './css/featuredChannel.css';

type featuredChannelProps = {
  title: string;
  description: string;
  image: string;
};

const FeaturedChannel = ({
  title,
  description,
  image,
}: featuredChannelProps) => {
  return (
    <div className="featured-channel">
      <img
        className="featured-image"
        src={`${
          image ? image : 'https://www.svgrepo.com/show/170303/avatar.svg'
        }`}
        alt={title}
      />
      <h2 className="featured-heading">{title}</h2>
      <p className="featured-description">{description}</p>
    </div>
  );
};

export default FeaturedChannel;
