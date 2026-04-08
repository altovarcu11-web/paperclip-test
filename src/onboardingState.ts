export type StepState = "ready" | "blocked" | "inProgress";

export type BlockerStatus = "open" | "resolved";

export type ActivityStatus = "done" | "active" | "queued";

export interface OnboardingState {
  company: string;
  currentStep: {
    label: string;
    state: StepState;
    summary: string;
  };
  nextDecision: {
    title: string;
    detail: string;
  };
  delegatedOwner: {
    name: string;
    scope: string;
  };
  blockers: Array<{
    id: string;
    summary: string;
    status: BlockerStatus;
  }>;
  activity: Array<{
    id: string;
    title: string;
    detail: string;
    status: ActivityStatus;
    statusLabel: string;
  }>;
}

export const onboardingState: OnboardingState = {
  company: "Onboarding workspace",
  currentStep: {
    label: "Foundation ready",
    state: "ready",
    summary: "The source-of-truth decision is complete and the first local product surface is ready for board review."
  },
  nextDecision: {
    title: "Validate the first onboarding view",
    detail: "Confirm that board/operators can see the next decision, delegated owner, and blocker status without reading issue threads."
  },
  delegatedOwner: {
    name: "CTO",
    scope: "Bootstrap the local app, verification commands, and the first onboarding-state surface."
  },
  blockers: [
    {
      id: "source-of-truth",
      summary: "Resolved: the CEO authorized a greenfield local-first scaffold in the empty workspace.",
      status: "resolved"
    }
  ],
  activity: [
    {
      id: "assess",
      title: "Assess workspace",
      detail: "Empty workspace confirmed; no existing repository or verification commands were present.",
      status: "done",
      statusLabel: "Done"
    },
    {
      id: "decision",
      title: "Resolve source direction",
      detail: "CEO selected a greenfield local-first product foundation over connecting an existing repo.",
      status: "done",
      statusLabel: "Done"
    },
    {
      id: "bootstrap",
      title: "Bootstrap app foundation",
      detail: "Created a runnable web app with lint, test, build, and setup documentation.",
      status: "done",
      statusLabel: "Done"
    },
    {
      id: "integrate",
      title: "Connect live Paperclip data",
      detail: "Defer API integration until auth and deployment expectations are explicit.",
      status: "queued",
      statusLabel: "Queued"
    }
  ]
};
