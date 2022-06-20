// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uQ1tStPUiuweYuxMksqyYP
// Component: Nyhwh0fbCy2wRS
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import { SupabaseUserSignUp } from "../../CodeComponents/DatabaseComponents"; // plasmic-import: DcCNavlfiJwpPm/codeComponent
import { FormContextComponent } from "../../CodeComponents/Form"; // plasmic-import: mBmhM2W1BTyu1_/codeComponent
import { FormTextInput } from "../../CodeComponents/Form"; // plasmic-import: NUsTWjb3PzOqdi/codeComponent
import TextInput from "../../TextInput"; // plasmic-import: J9zrw5ApeikFt/component
import Button from "../../Button"; // plasmic-import: IELNbHKEGo49X/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_supabase_tutorial_refreshed.module.css"; // plasmic-import: uQ1tStPUiuweYuxMksqyYP/projectcss
import sty from "./PlasmicSignupPage.module.css"; // plasmic-import: Nyhwh0fbCy2wRS/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: lTuEpwKUST6iVJ/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: DGsq-C17D8eHoS/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: bpL7QDrSKQF7Lo/icon

export type PlasmicSignupPage__VariantMembers = {};

export type PlasmicSignupPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignupPage__VariantsArgs;
export const PlasmicSignupPage__VariantProps = new Array<VariantPropType>();

export type PlasmicSignupPage__ArgsType = {};
type ArgPropType = keyof PlasmicSignupPage__ArgsType;
export const PlasmicSignupPage__ArgProps = new Array<ArgPropType>();

export type PlasmicSignupPage__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  supabaseUserSignUp?: p.Flex<typeof SupabaseUserSignUp>;
  formContext?: p.Flex<typeof FormContextComponent>;
  button?: p.Flex<typeof Button>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultSignupPageProps {}

export const defaultSignupPage__Args: Partial<PlasmicSignupPage__ArgsType> = {};

function PlasmicSignupPage__RenderFunc(props: {
  variants: PlasmicSignupPage__VariantsArgs;
  args: PlasmicSignupPage__ArgsType;
  overrides: PlasmicSignupPage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultSignupPage__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  return (
    <React.Fragment>
      {}

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__fj923)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__sAsWs)}
              >
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__vshrm)}
                  >
                    <div
                      data-plasmic-name={"text"}
                      data-plasmic-override={overrides.text}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text
                      )}
                    >
                      {"Location de vélos entre particuliers"}
                    </div>

                    <h2
                      data-plasmic-name={"h2"}
                      data-plasmic-override={overrides.h2}
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2
                      )}
                    >
                      {"Inscription"}
                    </h2>
                  </p.Stack>
                ) : null}

                <SupabaseUserSignUp
                  data-plasmic-name={"supabaseUserSignUp"}
                  data-plasmic-override={overrides.supabaseUserSignUp}
                  className={classNames(
                    "__wab_instance",
                    sty.supabaseUserSignUp
                  )}
                  redirectOnSuccess={"/" as const}
                >
                  <FormContextComponent
                    data-plasmic-name={"formContext"}
                    data-plasmic-override={overrides.formContext}
                    className={classNames("__wab_instance", sty.formContext)}
                  >
                    {true ? (
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__fa3M3
                        )}
                      >
                        <FormTextInput
                          className={classNames(
                            "__wab_instance",
                            sty.formTextInput__i3Wn
                          )}
                          name={"email" as const}
                        >
                          <TextInput placeholder={"Email" as const} />
                        </FormTextInput>

                        <FormTextInput
                          className={classNames(
                            "__wab_instance",
                            sty.formTextInput__tWcQm
                          )}
                          name={"password" as const}
                        >
                          <TextInput
                            placeholder={"Mot de passe" as const}
                            type={"password" as const}
                          />
                        </FormTextInput>

                        <Button
                          data-plasmic-name={"button"}
                          data-plasmic-override={overrides.button}
                          className={classNames("__wab_instance", sty.button)}
                          color={"green" as const}
                        >
                          {"Inscription"}
                        </Button>
                      </p.Stack>
                    ) : null}
                  </FormContextComponent>
                </SupabaseUserSignUp>
              </p.Stack>

              <p.PlasmicLink
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link
                )}
                component={Link}
                href={"/login-page" as const}
                platform={"nextjs"}
              >
                {"Vous avez déjà un compte ? Connectez-vous"}
              </p.PlasmicLink>
            </p.Stack>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "text",
    "h2",
    "supabaseUserSignUp",
    "formContext",
    "button",
    "link",
  ],
  text: ["text"],
  h2: ["h2"],
  supabaseUserSignUp: ["supabaseUserSignUp", "formContext", "button"],
  formContext: ["formContext", "button"],
  button: ["button"],
  link: ["link"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
  h2: "h2";
  supabaseUserSignUp: typeof SupabaseUserSignUp;
  formContext: typeof FormContextComponent;
  button: typeof Button;
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignupPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignupPage__VariantsArgs;
    args?: PlasmicSignupPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignupPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSignupPage__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSignupPage__ArgProps,
      internalVariantPropNames: PlasmicSignupPage__VariantProps,
    });

    return PlasmicSignupPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignupPage";
  } else {
    func.displayName = `PlasmicSignupPage.${nodeName}`;
  }
  return func;
}

export const PlasmicSignupPage = Object.assign(
  // Top-level PlasmicSignupPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    h2: makeNodeComponent("h2"),
    supabaseUserSignUp: makeNodeComponent("supabaseUserSignUp"),
    formContext: makeNodeComponent("formContext"),
    button: makeNodeComponent("button"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicSignupPage
    internalVariantProps: PlasmicSignupPage__VariantProps,
    internalArgProps: PlasmicSignupPage__ArgProps,
  }
);

export default PlasmicSignupPage;
/* prettier-ignore-end */