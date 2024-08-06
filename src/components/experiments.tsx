import { log } from "node_modules/astro/dist/core/logger/core";
import { useContext } from "react";
import {
  Button,
  ButtonContext,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
  ModalContext,
  HeadingContext,
  DialogContext,
  Provider,
} from "react-aria-components";

// This could be PrimaryButton, very specific to the function of the button like LogoutButton, SelectButton which have specific styles and behavior
// TextField examples:
function MyAwesomeButton({ children }: { children: React.ReactNode }) {
  return (
    <ButtonContext.Provider
      value={{
        className: "bg-blue-500 text-white p-2 rounded-md w-fit inline-block",
        onPress() {
          console.log("Button pressed");
        },
      }}
    >
      {children}
    </ButtonContext.Provider>
  );
}

function HomePageList() {
  // control styles of the list and behavior if needed, control selection, filters
}

function FormGroup() {
  // we can disable all fields under this context
}

function Overlay({ children }: { children: React.ReactNode }) {
  return (
    <ModalOverlay
      className={({ isEntering, isExiting }) => `
          fixed inset-0 z-10 overflow-y-auto bg-black/25 flex min-h-full items-center justify-center p-4 text-center backdrop-blur
          ${isEntering ? "animate-in fade-in duration-300 ease-out" : ""}
          ${isExiting ? "animate-out fade-out duration-200 ease-in" : ""}
        `}
    >
      {children}
    </ModalOverlay>
  );
}

function ConfirmDialog({ children }: { children: React.ReactNode }) {
  return (
    <Provider
      values={[
        [
          ModalContext,
          {
            isDismissable: true,
            onOpenChange: (isOpen) => {
              console.log("Modal is", isOpen ? "open" : "closed");
            },
            className: ({ isEntering, isExiting }) => `
                w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl
                ${isEntering ? "animate-in zoom-in-95 ease-out duration-300" : ""}
                ${isExiting ? "animate-out zoom-out-95 ease-in duration-200" : ""}
              `,
          },
        ],
        [
          DialogContext,
          {
            role: "alertdialog",
            className: "outline-none relative",
          },
        ],
      ]}
    >
      {children}
    </Provider>
  );
}

function ConfirmDialogContent({ children }: { children: React.ReactNode }) {
  const heading = useContext(HeadingContext);
  return (
    <Provider
      values={[
        [
          HeadingContext,
          {
            slots: {
              title: {
                // @ts-expect-error types error
                id: heading?.slots?.title.id,
                className:
                  "text-xxl font-semibold leading-6 my-0 text-slate-700",
              },
            },
          },
        ],
        [
          ButtonContext,
          {
            className:
              "inline-flex justify-center rounded-md border border-solid border-transparent px-5 py-2 font-semibold font-[inherit] text-base transition-colors cursor-default outline-none focus-visible:ring-2 ring-blue-500 ring-offset-2",
          },
        ],
      ]}
    >
      {children}
    </Provider>
  );
}

export function Experiments() {
  return (
    <div className="flex flex-col gap-3">
      <h1>RAC Composition</h1>
      <div className="flex flex-col gap-1">
        <MyAwesomeButton>
          <Button>Custom button</Button>
        </MyAwesomeButton>
        <HeadingContext.Provider value={{ className: "text-red-500" }}>
          <Heading slot="title">Heading Provider</Heading>
        </HeadingContext.Provider>
        <DialogTrigger>
          <MyAwesomeButton>
            <Button>Dialog</Button>
          </MyAwesomeButton>
          <ConfirmDialog>
            <Overlay>
              <Modal
                className={({ isEntering, isExiting }) => `
              w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl
              ${isEntering ? "animate-in zoom-in-95 ease-out duration-300" : ""}
              ${isExiting ? "animate-out zoom-out-95 ease-in duration-200" : ""}
            `}
              >
                <Dialog>
                  <ConfirmDialogContent>
                    <Heading slot="title">Delete folder</Heading>

                    <p className="mt-3 text-slate-500">
                      Are you sure you want to delete "Documents"? All contents
                      will be permanently destroyed.
                    </p>
                    <div className="mt-6 flex justify-end gap-2">
                      <Button className="bg-slate-200 text-slate-800 hover:border-slate-300 pressed:bg-slate-300">
                        Cancel
                      </Button>
                      <Button className="bg-red-500 text-white hover:border-red-600 pressed:bg-red-600">
                        Delete
                      </Button>
                    </div>
                  </ConfirmDialogContent>
                </Dialog>
              </Modal>
            </Overlay>
          </ConfirmDialog>
        </DialogTrigger>
      </div>
    </div>
  );
}
