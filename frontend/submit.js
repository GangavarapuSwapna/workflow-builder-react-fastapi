import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        'http://127.0.0.1:8000/pipelines/parse',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nodes,
            edges,
          }),
        }
      );

      const data = await response.json();

      alert(
        `Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
Is DAG: ${data.is_dag}`
      );

      console.log(data);
    } catch (error) {
      console.error(error);
      alert('Backend connection failed');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};