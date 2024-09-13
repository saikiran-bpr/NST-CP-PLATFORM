export default function ProblemPage() {
  return (
    <div className="grid gap-4">
      <div>
        <h2 className="text-2xl font-bold">Two Sum</h2>
        <p className="text-muted-foreground mt-3">
          Given an array of integers nums and an integer target, return indices
          of the two numbers such that they add up to target.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <h3 className="text-lg font-medium">Constraints</h3>
          <div className="rounded-md border bg-muted p-4 text-sm">
            <ul className="space-y-2">
              <li>2 &lt;= nums.length &lt;= 10^4</li>
              <li>-10^9 &lt;= nums[i] &lt;= 10^9</li>
              <li>-10^9 &lt;= target &lt;= 10^9</li>
              <li>Only one valid answer exists.</li>
            </ul>
          </div>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-medium">Input</h3>
          <div className="rounded-md border bg-muted p-4 text-sm">
            <p>
              <span className="font-medium">nums:</span> [2, 7, 11, 15]
            </p>
            <p>
              <span className="font-medium">target:</span> 9
            </p>
          </div>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-medium">Output</h3>
          <div className="rounded-md border bg-muted p-4 text-sm">
            <p>[0, 1]</p>
          </div>
        </div>
      </div>
    </div>
  );
}
