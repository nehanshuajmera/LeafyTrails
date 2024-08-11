import { TestimonialCard } from "../testimonial-card/testimonial-card.component";
import "./stories.styles.scss";

import back2Image from '../../assets/card-1.jpg';
import back1Image from '../../assets/card-1.jpg';

export const Stories = () => {
  return (
    <div className="stories">
      <h2 className="heading-secondary utility-margin-btm-small">
        We make people genuinely happy
      </h2>
      <div className="stories__container">
        <TestimonialCard
          backImage={back1Image}
          customerName="Naina Mahajan"
          title="Lorem ipsum dolor sit amet"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, esse. Praesentium nulla laudantium nostrum voluptate iste officia! Voluptatum non tempore porro rem numquam reprehenderit distinctio, repudiandae soluta eveniet expedita eum autem molestias corrupti ut! Deserunt."
        />
        <TestimonialCard
          backImage={back2Image}
          customerName="Naina Mahajan"
          title="Lorem ipsum dolor sit amet"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, esse. Praesentium nulla laudantium nostrum voluptate iste officia! Voluptatum non tempore porro rem numquam reprehenderit distinctio, repudiandae soluta eveniet expedita eum autem molestias corrupti ut! Deserunt."
        />
      </div>
    </div>
  );
};
