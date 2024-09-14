"use client";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { FileQuestionIcon, ClipboardListIcon, PlayIcon } from "@/icons/index";
import { SubmissionsPage } from "@/components/submissionsPage";
import ProblemPage from "@/components/problemPage";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { CODESNIPPETS } from "@/constants";

export default function Problem() {
  const [language, setLanguage] = useState("javascript");
  const [page, setPage] = useState(true);
  return (
    <ResizablePanelGroup direction="horizontal">
      <div className="min-h-screen w-full flex bg-background">
        <ResizablePanel>
          <div className="flex flex-col gap-4 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setPage(true);
                  }}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-white"
                >
                  <FileQuestionIcon className="h-5 w-5" />
                  <span className="sr-only">Question</span>
                </button>
                <button
                  onClick={() => {
                    setPage(false);
                  }}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-white"
                >
                  <ClipboardListIcon className="h-5 w-5" />
                  <span className="sr-only">Submissions</span>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">Easy</Badge>
              </div>
            </div>
            {page ? <ProblemPage /> : <SubmissionsPage />}
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle/>
        <ResizablePanel>
          <div className="flex flex-col">
            <div className="flex items-center justify-between border-b border-border p-4">
              <div className="flex items-center gap-2">
                <Select
                  onValueChange={(e) => {
                    setLanguage(e);
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={"javascript"} />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(CODESNIPPETS).map(language => (
                      <SelectItem value={language}>{language}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <PlayIcon className="h-5 w-5" />
                  <span className="sr-only">Run</span>
                </Button>
                <Button size="sm" onClick={() => {
                  setPage(false);
                }}>Submit</Button>
              </div>
            </div>
            <div className="flex-1 overflow-auto">
              <div className="grid h-full grid-rows-[1fr_auto] gap-4 p-4">
                <Editor
                  theme="vs-dark"
                  height={"64vh"}
                  language={language}
                  value={CODESNIPPETS[language]}
                />
                <div className="grid gap-2">
                  <div className="rounded-md border bg-muted p-3 text-sm">
                    <h4 className="text-lg font-medium">Input</h4>
                    <textarea
                      placeholder="Enter Testcase"
                      className="resize-none w-full rounded-md outline-none border-none mt-2  bg-muted p-1 text-sm"
                    />
                  </div>
                  <div className="rounded-md border bg-muted p-4 text-sm">
                    <h4 className="text-lg font-medium">Output</h4>
                    <textarea
                      value={""}
                      className="resize-none w-full rounded-md outline-none border-none mt-1  bg-muted p-1 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ResizablePanel>
      </div>
    </ResizablePanelGroup>
  );
}
