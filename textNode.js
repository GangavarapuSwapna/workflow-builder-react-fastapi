import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || '{{input}}'
  );

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

  const variables = [];
  let match;

  while ((match = regex.exec(currText)) !== null) {
    variables.push(match[1]);
  }

  return (
    <div
      style={{
        width: Math.max(250, currText.length * 8),
        minHeight: Math.max(
          120,
          currText.split('\n').length * 35
        ),
        position: 'relative',
      }}
    >
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{
            top: `${((index + 1) * 100) / (variables.length + 1)}%`,
          }}
        />
      ))}

      <BaseNode
        title="Text"
        outputs={[
          { id: `${id}-output` }
        ]}
      >
        <label>
          Text:
        </label>

        <textarea
          value={currText}
          onChange={handleTextChange}
          rows={4}
          style={{
            width: '100%',
            resize: 'none',
          }}
        />
      </BaseNode>
    </div>
  );
};