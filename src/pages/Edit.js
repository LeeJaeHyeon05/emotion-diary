import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {

  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const id = searchParams.get('id')

  return <div>Edit</div>;
};

export default Edit;
