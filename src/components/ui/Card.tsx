'use client';

import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
}

export function Card({
  children,
  hoverable = false,
  className = '',
  ...props
}: CardProps) {
  return (
    <div
      className={`
        bg-zinc-800 rounded-2xl shadow-sm border border-zinc-700
        transition-all duration-300
        ${hoverable ? 'hover:shadow-lg hover:border-zinc-600 cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
