// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uQ1tStPUiuweYuxMksqyYP
// Component: _u9SMwEU4JVpzG
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
import { SupabaseQuery } from "../../CodeComponents/DatabaseComponents"; // plasmic-import: 9HJzcZkQQ1CaPj/codeComponent
import { SupabaseMutation } from "../../CodeComponents/DatabaseComponents"; // plasmic-import: -f1Kq0-fPBNYLK/codeComponent
import { FormContextComponent } from "../../CodeComponents/Form"; // plasmic-import: mBmhM2W1BTyu1_/codeComponent
import { FormTextInput } from "../../CodeComponents/Form"; // plasmic-import: NUsTWjb3PzOqdi/codeComponent
import TextInput from "../../TextInput"; // plasmic-import: J9zrw5ApeikFt/component
import Button from "../../Button"; // plasmic-import: IELNbHKEGo49X/component

import { useScreenVariants as useScreenVariants_52Cioa0UnGfvY1 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 52cioa0UNGfvY1/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_supabase_tutorial_refreshed.module.css"; // plasmic-import: uQ1tStPUiuweYuxMksqyYP/projectcss
import sty from "./PlasmicUpdateEntry.module.css"; // plasmic-import: _u9SMwEU4JVpzG/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: lTuEpwKUST6iVJ/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: DGsq-C17D8eHoS/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: bpL7QDrSKQF7Lo/icon

export type PlasmicUpdateEntry__VariantMembers = {};

export type PlasmicUpdateEntry__VariantsArgs = {};
type VariantPropType = keyof PlasmicUpdateEntry__VariantsArgs;
export const PlasmicUpdateEntry__VariantProps = new Array<VariantPropType>();

export type PlasmicUpdateEntry__ArgsType = {
  test?: any;
  id?: string;
};

type ArgPropType = keyof PlasmicUpdateEntry__ArgsType;
export const PlasmicUpdateEntry__ArgProps = new Array<ArgPropType>(
  "test",
  "id"
);

export type PlasmicUpdateEntry__OverridesType = {
  root?: p.Flex<"div">;
  h3?: p.Flex<"h3">;
  supabaseQuery?: p.Flex<typeof SupabaseQuery>;
  supabaseMutation?: p.Flex<typeof SupabaseMutation>;
  formContext?: p.Flex<typeof FormContextComponent>;
  textarea?: p.Flex<"textarea">;
  button?: p.Flex<typeof Button>;
};

export interface DefaultUpdateEntryProps {}

export const defaultUpdateEntry__Args: Partial<PlasmicUpdateEntry__ArgsType> =
  {};

function PlasmicUpdateEntry__RenderFunc(props: {
  variants: PlasmicUpdateEntry__VariantsArgs;
  args: PlasmicUpdateEntry__ArgsType;
  overrides: PlasmicUpdateEntry__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultUpdateEntry__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  const [isTextareaFocusVisible, triggerTextareaFocusVisibleProps] = useTrigger(
    "useFocusVisible",
    {
      isTextInput: true,
    }
  );

  const triggers = {
    focusVisible_textarea: isTextareaFocusVisible,
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_52Cioa0UnGfvY1(),
  });

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
              className={classNames(projectcss.all, sty.freeBox__pOs53)}
            >
              <h3
                data-plasmic-name={"h3"}
                data-plasmic-override={overrides.h3}
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3
                )}
              >
                {"Mise à jour des infos sur le vélo"}
              </h3>

              <SupabaseQuery
                data-plasmic-name={"supabaseQuery"}
                data-plasmic-override={overrides.supabaseQuery}
                className={classNames("__wab_instance", sty.supabaseQuery)}
                columns={"name, description, id, imageUrl" as const}
                filters={[
                  {
                    name: "eq",
                    args: [{ column: "id", value: "{{local.id}}" }],
                  },
                ]}
                single={true}
                tableName={"entries" as const}
              >
                <SupabaseMutation
                  data-plasmic-name={"supabaseMutation"}
                  data-plasmic-override={overrides.supabaseMutation}
                  className={classNames("__wab_instance", sty.supabaseMutation)}
                  data={{
                    name: "{{form.name}}",
                    description: "{{form.description}}",
                    imageUrl: "{{form.imageUrl}}",
                  }}
                  filters={[
                    {
                      name: "eq",
                      args: [{ column: "id", value: "{{local.id}}" }],
                    },
                  ]}
                  method={"update" as const}
                  redirectOnSuccess={"/" as const}
                  tableName={"entries" as const}
                >
                  {true ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__eKcn9)}
                    >
                      <FormContextComponent
                        data-plasmic-name={"formContext"}
                        data-plasmic-override={overrides.formContext}
                        className={classNames(
                          "__wab_instance",
                          sty.formContext
                        )}
                      >
                        {true ? (
                          <p.Stack
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__rnzSo
                            )}
                          >
                            {true ? (
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__vfLry
                                )}
                              >
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__iFiUn
                                  )}
                                >
                                  {"Name"}
                                </div>

                                <FormTextInput
                                  className={classNames(
                                    "__wab_instance",
                                    sty.formTextInput__tmszx
                                  )}
                                  defaultValue={"{{query.name}}" as const}
                                  name={"name" as const}
                                >
                                  <TextInput
                                    className={classNames(
                                      "__wab_instance",
                                      sty.textInput__vnqFt
                                    )}
                                  />
                                </FormTextInput>
                              </div>
                            ) : null}
                            {true ? (
                              <p.Stack
                                as={"div"}
                                hasGap={true}
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__rpKfY
                                )}
                              >
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__nlz4Q
                                  )}
                                >
                                  {"Image URL"}
                                </div>

                                <FormTextInput
                                  className={classNames(
                                    "__wab_instance",
                                    sty.formTextInput__lDevQ
                                  )}
                                  defaultValue={"{{query.imageUrl}}" as const}
                                  name={"imageUrl" as const}
                                >
                                  <TextInput
                                    className={classNames(
                                      "__wab_instance",
                                      sty.textInput__ppYwT
                                    )}
                                  />
                                </FormTextInput>
                              </p.Stack>
                            ) : null}
                            {true ? (
                              <p.Stack
                                as={"div"}
                                hasGap={true}
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__hq97G
                                )}
                              >
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__cjw2V
                                  )}
                                >
                                  {"Description"}
                                </div>

                                <FormTextInput
                                  className={classNames(
                                    "__wab_instance",
                                    sty.formTextInput__lwb6N
                                  )}
                                  defaultValue={
                                    "{{query.description}}" as const
                                  }
                                  name={"description" as const}
                                >
                                  <textarea
                                    data-plasmic-name={"textarea"}
                                    data-plasmic-override={overrides.textarea}
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.textarea,
                                      sty.textarea,
                                      {
                                        [sty.textarea___focusVisible]:
                                          triggers.focusVisible_textarea,
                                      }
                                    )}
                                    id={"" as const}
                                    placeholder={"Enter something..." as const}
                                    value={"" as const}
                                    data-plasmic-trigger-props={[
                                      triggerTextareaFocusVisibleProps,
                                    ]}
                                  />
                                </FormTextInput>
                              </p.Stack>
                            ) : null}
                            {true ? (
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox___1WtMt
                                )}
                              >
                                <Button
                                  data-plasmic-name={"button"}
                                  data-plasmic-override={overrides.button}
                                  color={"green" as const}
                                >
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text__mtKki
                                    )}
                                  >
                                    {"Mise à jour"}
                                  </div>
                                </Button>
                              </div>
                            ) : null}
                          </p.Stack>
                        ) : null}
                      </FormContextComponent>
                    </div>
                  ) : null}
                </SupabaseMutation>
              </SupabaseQuery>
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
    "h3",
    "supabaseQuery",
    "supabaseMutation",
    "formContext",
    "textarea",
    "button",
  ],
  h3: ["h3"],
  supabaseQuery: [
    "supabaseQuery",
    "supabaseMutation",
    "formContext",
    "textarea",
    "button",
  ],
  supabaseMutation: ["supabaseMutation", "formContext", "textarea", "button"],
  formContext: ["formContext", "textarea", "button"],
  textarea: ["textarea"],
  button: ["button"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  h3: "h3";
  supabaseQuery: typeof SupabaseQuery;
  supabaseMutation: typeof SupabaseMutation;
  formContext: typeof FormContextComponent;
  textarea: "textarea";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUpdateEntry__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUpdateEntry__VariantsArgs;
    args?: PlasmicUpdateEntry__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUpdateEntry__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicUpdateEntry__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicUpdateEntry__ArgProps,
      internalVariantPropNames: PlasmicUpdateEntry__VariantProps,
    });

    return PlasmicUpdateEntry__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUpdateEntry";
  } else {
    func.displayName = `PlasmicUpdateEntry.${nodeName}`;
  }
  return func;
}

export const PlasmicUpdateEntry = Object.assign(
  // Top-level PlasmicUpdateEntry renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h3: makeNodeComponent("h3"),
    supabaseQuery: makeNodeComponent("supabaseQuery"),
    supabaseMutation: makeNodeComponent("supabaseMutation"),
    formContext: makeNodeComponent("formContext"),
    textarea: makeNodeComponent("textarea"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicUpdateEntry
    internalVariantProps: PlasmicUpdateEntry__VariantProps,
    internalArgProps: PlasmicUpdateEntry__ArgProps,
  }
);

export default PlasmicUpdateEntry;
/* prettier-ignore-end */