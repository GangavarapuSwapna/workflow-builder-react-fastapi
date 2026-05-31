import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  title,
  children,
  inputs = [],
  outputs = [],
}) => {
  return (
    <div
      style={{
        width: 250,
        minHeight: 120,
        border: '1px solid #6366f1',
        borderRadius: 10,
        padding: 10,
        background: '#fff',
      }}
    >
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{ top: `${((index + 1) * 100) / (inputs.length + 1)}%` }}
        />
      ))}

      <div>
        <strong>{title}</strong>
      </div>

      <div>{children}</div>

      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{ top: `${((index + 1) * 100) / (outputs.length + 1)}%` }}
        />
      ))}
    </div>
  );
};
