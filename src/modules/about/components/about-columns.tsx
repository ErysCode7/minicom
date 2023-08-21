type Props = {
  list: {
    title: string;
    text: string;
  };
  order: number;
};

const AboutColumns = ({ list, order = 1 }: Props) => {
  return (
    <div>
      <h3 className="font-bold">{list.title}</h3>
      <p>{list.text}</p>
    </div>
  );
};

export default AboutColumns;
