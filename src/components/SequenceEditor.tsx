import { HTMLAttributes, useEffect, useState } from 'react';
import { TimeSignature } from './context/utils';

export interface SequencerEditorCellProps
  extends HTMLAttributes<HTMLDivElement> {
  onToggle?: () => void;
}

export function SequencerEditorCell({
  onToggle,
  className,
}: SequencerEditorCellProps) {
  return (
    <div
      className={`min-w-[0.5em] w-[50%] mx-auto max-w-[1.5em] h-8 cursor-pointer ${className}`}
      onClick={() => {
        if (onToggle) onToggle();
      }}
    />
  );
}

export interface MeasureProps {
  timeSignature: TimeSignature;
  pattern: string;
  invert?: boolean;

  onToggle?: (index: number) => void;
}

export function Measure({
  timeSignature,
  pattern,
  invert,
  onToggle,
}: MeasureProps) {
  function toggle(index: number) {
    return () => {
      if (onToggle) {
        onToggle(index);
      }
    };
  }

  return (
    <div
      className='grid gap-2 py-2 bg-[#000] rounded-md'
      style={{
        gridTemplateColumns: `repeat(${timeSignature[0]}, minmax(0, 1fr)`,
      }}
    >
      {pattern.split('').map((c, index) => (
        <SequencerEditorCell
          className={`${c === 'x' ? 'bg-indigo-400' : 'bg-[#222]'}
          `}
          key={index}
          onToggle={toggle(index)}
        />
      ))}
    </div>
  );
}

export interface SequenceEditorProps {
  timeSignature: TimeSignature;
  measureCount: number;
  pattern: string[];

  onToggle?: (index: number) => void;
}

export function SequenceEditor({
  timeSignature,
  measureCount,
  pattern,
  onToggle,
}: SequenceEditorProps) {
  return (
    <div
      className='grid gap-1'
      style={{
        gridTemplateColumns: `repeat(${measureCount}, minmax(0, 1fr)`,
      }}
    >
      {new Array(measureCount).fill(-1).map((_, index) => (
        <Measure
          key={index}
          invert={index % 2 !== 0}
          {...{ timeSignature }}
          pattern={pattern[index]}
          onToggle={(innerIndex) => {
            if (onToggle) onToggle(index * timeSignature[0] + innerIndex);
          }}
        />
      ))}
    </div>
  );
}
