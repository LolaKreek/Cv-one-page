import components from '../../components';

//Main page in this project
const Homepage = () => {
  //Import of required components
  const {Menu, AboutMe, Tools, Portfolio, Blogs, ContactMe} = components;
  
  return (
    <div className="main-wrapper">
      <Menu />
      <AboutMe />
      <Tools />
      <Portfolio />
      <Blogs />
      <ContactMe />
    </div>
  );
}

export default Homepage;