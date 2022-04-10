import "./styles.scss";

interface CardIconProps {
  icon: string;
  title: string;
}

const CardIcon = ({ icon, title }: CardIconProps) => {
  return (
    <div className="w-100 principalCardIcon">
      <div className="cardIcon d-flex">
        <div className="iconCategoria">
          <i className={`fa fa-${icon}`}></i>
        </div>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default CardIcon;
