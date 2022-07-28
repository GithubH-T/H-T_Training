import useFetch from "./usefetch";

const Home = () => {
    const [data] = useFecth("url");

    return (
        <>
            {data && data.map((iem) => {
                return <p key={item.id}>{item.title}</p>;
            })}
        </>
    );
};