import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("snapshot logs", () => {
  it("tracks the repository snapshot log folder and today's initialized entry", () => {
    const repoRoot = path.resolve(import.meta.dirname, "..");
    const logDirectory = path.join(repoRoot, "snapshot-logs");
    const todaysLogPath = path.join(logDirectory, "2026-04-09.md");

    expect(existsSync(logDirectory)).toBe(true);
    expect(existsSync(todaysLogPath)).toBe(true);

    const content = readFileSync(todaysLogPath, "utf8");

    expect(content).toContain("# Snapshot Log");
    expect(content).toContain("## 2026-04-09 12:02:00 -05");
    expect(content).toContain("### Metadata");
    expect(content).toContain("- timestamp:");
    expect(content).toContain("- requester:");
    expect(content).toContain("- issue or task reference:");
    expect(content).toContain("- result:");
    expect(content).toContain("- branch updated:");
    expect(content).toContain("- commit hash:");
    expect(content).toContain("- number of files changed:");
    expect(content).toContain("### Summary");
    expect(content).toContain("### Relevant Files Changed");
    expect(content).toContain("### Verification");
    expect(content).toContain("### Preview");
    expect(content).toContain("snapshot log system was created");
    expect(content).toContain("Only the CTO should maintain and update these logs after commits and pushes.");
  });
});
