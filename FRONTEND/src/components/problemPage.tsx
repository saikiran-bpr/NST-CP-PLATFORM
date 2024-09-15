"use client";
interface Question {
  id: number;
  question: string;
  description: string;
  input: string;
  output: string;
  constraints: string;
  sample_input_1: string;
  sample_output_1: string;
  sample_input_2: string;
  sample_output_2: string;
}

interface ProblemPageProps {
  question: Question;
}

export default function ProblemPage({ question }: ProblemPageProps) {

  return (
    <div className="grid gap-4">
      <div>
        <h2 className="text-2xl font-bold">{question.question}</h2>
        <p className="text-muted-foreground mt-3">
          {question.description}
        </p>
      </div>
      <div>
        <h3 className="text-lg font-medium">Input</h3>
        {question.input.split("\n").map(line => (
          <p className="text-muted-foreground mt-1">
            {line}
          </p>
        ))}
      </div>
      <div>
        <h3 className="text-lg font-medium">Output</h3>
        {question.output.split("\n").map(line => (
          <p className="text-muted-foreground mt-1">
            {line}
          </p>
        ))}
      </div>
      
      <div className="grid gap-2">
        <div className="grid gap-1">
          <h3 className="text-lg font-medium">Constraints</h3>
          <div className="rounded-md border bg-muted p-4 text-sm">
            <ul className="space-y-2">
              {question.constraints.split("\n").map(line => (
                <li>{line}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-medium">Sample Input 1</h3>
          <div className="rounded-md border bg-muted p-4 text-sm">
            {question.sample_input_1.split("\n").map(line => (
              <p className="mt-1">{line}</p>
            ))}
          </div>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-medium">Sample Output 1</h3>
          <div className="rounded-md border bg-muted p-4 text-sm">
            {question.sample_output_1.split("\n").map(line => (
              <p className="mt-1">{line}</p>
            ))}
          </div>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-medium">Sample Input 2</h3>
          <div className="rounded-md border bg-muted p-4 text-sm">
            {question.sample_input_2.split("\n").map(line => (
              <p className="mt-1">{line}</p>
            ))}
          </div>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-medium">Sample Output</h3>
          <div className="rounded-md border bg-muted p-4 text-sm">
            {question.sample_output_2.split("\n").map(line => (
              <p className="mt-1">{line}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
