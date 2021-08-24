import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getBeer } from "./store/actions";
import { useState, useEffect } from "react";

const App = () => {
	const { register, handleSubmit } = useForm();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	const name = useSelector((state) => state.name);
	const image = useSelector((state) => state.image);

	const onSubmit = (data) => {
		dispatch(getBeer(data.beerID))
	}

	useEffect(() => {
		name !== null ? setLoading(false) : setLoading(true)
		image !== null ? setLoading(false) : setLoading(true)
	}, [name, image]);

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
					<p className="centered">{name}</p>
					<img className="centered img" src={image} alt={name} />
				</div>
			}
		</div>
	);
}

export default App;