import { Container, HLine, HashList, Hashtag } from "./styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const MOCKDATA = [
	{ id: 1, hashtag: "react" },
	{ id: 2, hashtag: "javascript" },
	{ id: 3, hashtag: "typescript" },
	{ id: 4, hashtag: "nodejs" },
	{ id: 5, hashtag: "reactnative" },
	{ id: 6, hashtag: "nextjs" },
	{ id: 7, hashtag: "styledcomponents" },
	{ id: 8, hashtag: "reactrouter" },
	{ id: 9, hashtag: "reactquery" },
	{ id: 10, hashtag: "reactquery" },
];

async function getTrending() {
	const { data } = await axios.get("/trending");
	return data;
}

function Trending() {
	const [trending, setTrending] = useState([]);
	useEffect(() => {
		setTrending(getTrending());
	});
	return (
		<Container>
			<h1>trending</h1>
			<HLine />
			<HashList>
				{trending.map((item) => (
					<Hashtag key={item.id}>
						<Link to={`/hashtag/${item.hashtag}`}>
							#{item.hashtag}
						</Link>
					</Hashtag>
				))}
			</HashList>
		</Container>
	);
}

export default Trending;
