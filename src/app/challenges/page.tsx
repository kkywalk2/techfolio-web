import React from 'react';

const mockChallenges = [
  { id: 1, title: 'Challenge 1', description: 'Description for Challenge 1' },
  { id: 2, title: 'Challenge 2', description: 'Description for Challenge 2' },
  { id: 3, title: 'Challenge 3', description: 'Description for Challenge 3' },
];

export default function Challenges() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Challenges</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockChallenges.map((challenge) => (
          <div key={challenge.id} className="rounded-lg border p-4 shadow">
            <h2 className="mb-2 text-xl font-semibold">{challenge.title}</h2>
            <p>{challenge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
