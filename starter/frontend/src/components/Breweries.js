import { useSelector } from "react-redux";

const Breweries = () => {
  const brews = useSelector((state) => state.brews.breweries);
  console.log(brews);

  return (
    <div style={{ display: "flex", flexFlow: "column" }}>
      {brews.map((brewery) => {
        const { name, website_url, id } = brewery;

        return (
          <a key={id} href={website_url}>
            {name}
          </a>
        );
      })}
    </div>
  );
};

export default Breweries;
