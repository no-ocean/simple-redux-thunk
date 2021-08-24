import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getBeer } from "./store/actions";
import { useState, useEffect } from "react";

const App = () => {
	const { register, handleSubmit } = useForm();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	const beer = useSelector((state) => state.data);

	const onSubmit = (data) => {
		dispatch(getBeer(data.beerID))
	}

	useEffect(() => {
		beer !== null ? setLoading(false) : setLoading(true)
	}, [beer]);

	return (
		<div className="App">
			<h1 className="centered">SHOW BEER</h1>
			<form 
				className="centered"
				onSubmit={handleSubmit(onSubmit)}
			>
				<label>
					<p>enter beer id</p>
					<input {...register("beerID")} type="text" />
				</label>
				<button>show</button>
			</form>
			{ loading ? 
				<h2 className="centered">LOADING...</h2>
				:
				<div className="centered"> 
					<p className="centered">{beer[0].name}</p>
					<img className="centered img" src={beer[0].image_url} alt={beer[0].name} />
				</div>
			}
		</div>
	);
}

export default App;