!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="75544cad-dae1-453a-ba52-28c0515bce41",e._sentryDebugIdIdentifier="sentry-dbid-75544cad-dae1-453a-ba52-28c0515bce41")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4888],{77202:function(e,t,n){n.d(t,{$_:function(){return r},KM:function(){return o},YV:function(){return a},gr:function(){return l}});var i=n(77074);let o="button-block",r=i.BlockType.Button,a={[o]:r},l={[r]:o}},8958:function(e,t,n){n.d(t,{Ji:function(){return f},Mk:function(){return z},RU:function(){return d},Rw:function(){return c},pY:function(){return p}}),n(86475);var i=n(20322),o=n(9816),r=n(77202),a=n(96198),l=n(24621),u=n(88019);let c={small:{height:"h-[30px]",padding:"px-[14px] py-[5px]"},medium:{height:"h-[44px]",padding:"px-[20px] py-[10px]"},large:{height:"h-[60px]",padding:"px-[20px] py-[10px]"}},p={fitContent:"w-auto",fill:"w-full"},d=i.z.discriminatedUnion("type",[l.xr,l.RL,l.co,i.z.object({type:i.z.literal("zap"),config:i.z.object({zap:u.WC.pick({id:!0,title:!0,paused:!0})})})]),s=d.array().max(2).superRefine((e,t)=>{let n=e.some(e=>"zap"===e.type),o=e.some(e=>"notification"===e.type);return e.length>1&&o&&!n?t.addIssue({message:"Notification action is not allowed without a Zap action",code:i.z.ZodIssueCode.custom}):e.length>1&&!o?t.addIssue({message:"Only one action is allowed",code:i.z.ZodIssueCode.custom}):e}),f=i.z.object({id:i.z.string().cuid().or(i.z.string().regex(a.Vp)).optional(),label:i.z.string().min(1).max(50,"Label must be less than 50 characters"),type:i.z.enum(["primary","secondary"]).default("primary").openapi({effectType:"input"}),size:i.z.enum(["small","medium","large"]).default("medium").openapi({effectType:"input"}),colorType:i.z.enum(["theme","custom"]).default("theme").openapi({effectType:"input"}),customColor:i.z.object({background:i.z.string().regex(a.wM,"Invalid hex color code").default("#000000").openapi({effectType:"input"}),textColor:i.z.string().regex(a.wM,"Invalid hex color code").default("#ffffff").openapi({effectType:"input"})}).optional(),width:i.z.enum(["fitContent","fill"]).default("fitContent").openapi({effectType:"input"}),alignment:i.z.enum(["left","center","right"]).default("center").openapi({effectType:"input"}),actions:s.default([]).openapi({effectType:"input"}),style:o.eX.optional()}),z=o.rA.extend({type:i.z.literal(r.KM),config:f}).openapi({ref:"ButtonBlock"})},94742:function(e,t,n){n.d(t,{Tc:function(){return l},fH:function(){return r}}),n(86475);var i=n(20322);let o=i.z.object({width:i.z.union([i.z.literal("full"),i.z.literal("wide"),i.z.literal("medium"),i.z.literal("narrow")]).optional(),alignment:i.z.union([i.z.literal("left"),i.z.literal("center"),i.z.literal("right")]).optional(),height:i.z.union([i.z.literal("default"),i.z.literal("custom")]).optional(),heightValue:i.z.number().optional()}),r=i.z.object({iconUrl:i.z.string().url().nullable().default(null),iconMask:i.z.enum(["squircle","square","circle"]).default("circle"),iconSize:i.z.number().int().min(40).max(80).default(50),logoImageUrl:i.z.string().url().nullable().default(null),logoLinkUrl:i.z.string().nullable().default(null),logoHeight:i.z.number().int().min(20).max(64).default(34),openByDefault:i.z.boolean().default(!1),nudgeMessage:i.z.boolean().default(!1)}),a=r.partial().extend({id:i.z.string().cuid().or(i.z.string().regex(/^_BLOCK_(\d+)$/)).optional(),chatbotId:i.z.string().cuid().or(i.z.string().regex(/\$\{\{ *([A-Za-z0-9_.]+) *\}\}/g)).optional(),isConnectedChatbot:i.z.boolean().optional().default(!1).openapi({effectType:"input"}),style:o.default({width:"medium",alignment:"center",height:"default"}).openapi({effectType:"input"})}),l=i.z.object({type:i.z.literal("chatbot-block"),config:a,errors:i.z.array(i.z.object({code:i.z.enum(["chatbot:authentication-does-not-exist","chatbot:authentication-test-failed","chatbot:model-not-available","chatbot:max-tokens-too-high","chatbot:chatbot-does-not-exist"]),blockId:i.z.string().nullable(),path:i.z.array(i.z.union([i.z.string(),i.z.number()]))})).optional()})},20440:function(e,t,n){n.d(t,{$_:function(){return r},KM:function(){return o},YV:function(){return a},gr:function(){return l}});var i=n(77074);let o="checklist-block",r=i.BlockType.Checklist,a={[o]:r},l={[r]:o}},29632:function(e,t,n){n.d(t,{I:function(){return c}}),n(86475);var i=n(20322),o=n(96198),r=n(9816),a=n(20440),l=n(24579),u=n(51129);let c=r.rA.extend({type:i.z.literal(a.KM),config:i.z.object({id:i.z.string().cuid().or(i.z.string().regex(o.Vp)).optional(),tableId:i.z.string().optional(),title:i.z.string().default(l.j.DEFAULT_CHECKLIST_TITLE_COPY).openapi({effectType:"input"}),newListItemButtonCopy:i.z.string().default(l.j.NEW_LIST_ITEM_BUTTON_DEFAULT_COPY).openapi({effectType:"input"}),listItemLabelFieldId:i.z.number().optional(),listItemCompletedFieldId:i.z.number().optional(),listItemTitleFieldId:i.z.number().optional(),listItemDueDateFieldId:i.z.number().optional(),listItemDetailFields:i.z.array(i.z.number()).default([]).openapi({effectType:"input"}),filters:i.z.array(r.eq).default([]).openapi({effectType:"input"}),orders:i.z.array(u.fH).default([]).openapi({effectType:"input"}),canCreateListItems:i.z.boolean().default(!1).openapi({effectType:"input"}),canEditListItems:i.z.boolean().default(!0).openapi({effectType:"input"}),canDeleteListItems:i.z.boolean().default(!1).openapi({effectType:"input"}),canSearchListItems:i.z.boolean().default(!1).openapi({effectType:"input"}),canViewDetails:i.z.boolean().default(!0).openapi({effectType:"input"}),canViewCompleted:i.z.boolean().default(!0).openapi({effectType:"input"}),style:r.eX.default({width:"wide",alignment:"center"}).openapi({effectType:"input"}).transform(e=>({width:e.width??"wide",alignment:e.alignment??"center"})).openapi({effectType:"input"})})}).openapi({ref:"ChecklistBlock"})},24579:function(e,t,n){n.d(t,{j:function(){return i}});let i={NAME:"Checklist",DESCRIPTION:"Create and assign tasks from a Table, and trigger when a task is completed.",DEFAULT_CHECKLIST_TITLE_COPY:"My checklist",NEW_LIST_ITEM_BUTTON_DEFAULT_COPY:"New checklist item"}},18886:function(e,t,n){n.d(t,{$_:function(){return r},KM:function(){return o},YV:function(){return a},gr:function(){return l}});var i=n(77074);let o="divider-block",r=i.BlockType.Divider,a={[o]:r},l={[r]:o}},27197:function(e,t,n){n.d(t,{q:function(){return u}}),n(86475);var i=n(20322),o=n(96198),r=n(9816),a=n(18886),l=n(73889);let u=r.rA.extend({type:i.z.literal(a.KM),config:i.z.object({id:i.z.string().cuid().or(i.z.string().regex(o.Vp)).optional(),spacing:i.z.enum(["small","medium","large"]).optional(),width:l.b.optional()})}).openapi({ref:"DividerBlock"})},76572:function(e,t,n){n.d(t,{$_:function(){return r},KM:function(){return o},YV:function(){return a},gr:function(){return l}});var i=n(77074);let o="embed-block",r=i.BlockType.Embed,a={[o]:r},l={[r]:o}},55478:function(e,t,n){n.d(t,{R:function(){return p},u:function(){return c}}),n(86475);var i=n(20322),o=n(9816),r=n(76572),a=n(73889),l=n(96198),u=n(93278);let c=i.z.object({id:i.z.string().cuid().or(i.z.string().regex(l.Vp)).optional(),title:i.z.string(),width:a.b.optional().default("medium").openapi({effectType:"input"}),height:i.z.string().optional().default("350").openapi({effectType:"input"}).superRefine((e,t)=>{let n=Number(e);return isNaN(n)?t.addIssue({message:"Not a number",code:i.z.ZodIssueCode.custom}):Number.isInteger(n)?n<100||n>1e3?t.addIssue({message:"Must be between 100 and 1000",code:i.z.ZodIssueCode.custom}):void 0:t.addIssue({message:"Must be a whole number",code:i.z.ZodIssueCode.custom})}),source:i.z.enum(["code","url"]).default("code").openapi({effectType:"input"}),code:i.z.string().transform((e,t)=>{if(!e)return e;let n=function(e){let t=(0,u.sanitize)(e,{ALLOWED_TAGS:["iframe"],RETURN_DOM_FRAGMENT:!0,IN_PLACE:!0});if(0===t.children.length)return"Invalid HTML";let n=s(t.children[0].src);return n?d(n):"Invalid `src` attribute"}(e);return n?(t.addIssue({message:n,code:i.z.ZodIssueCode.custom}),i.z.NEVER):(0,u.sanitize)(e,{IN_PLACE:!0,ALLOWED_TAGS:["iframe"]})}).optional().openapi({type:"string"}),url:i.z.string().superRefine((e,t)=>{if(!e)return i.z.NEVER;let n=s(e);if(!n)return t.addIssue({message:"Invalid URL",code:i.z.ZodIssueCode.custom});let o=d(n);return o?t.addIssue({message:o,code:i.z.ZodIssueCode.custom}):i.z.NEVER}).optional()}),p=o.rA.extend({type:i.z.literal(r.KM),config:c}).openapi({ref:"EmbedBlock"});function d(e){return"https:"!==e.protocol?"Only HTTPS addresses are allowed":["zapier-staging.app","zapier-staging.com","zapier.com","zapier.app"].some(t=>e.hostname.includes(t))?"Disallowed address":null}function s(e){try{return new URL(e)}catch{return null}}},33091:function(e,t,n){n.d(t,{$_:function(){return r},KM:function(){return o},YV:function(){return a},gr:function(){return l}});var i=n(77074);let o="field-block",r=i.BlockType.Field,a={[o]:r},l={[r]:o}},52989:function(e,t,n){n.d(t,{XE:function(){return p},dm:function(){return B},g5:function(){return l},iv:function(){return y},p7:function(){return _},rY:function(){return M},rh:function(){return s},yV:function(){return h}}),n(86475);var i=n(9816),o=n(33091),r=n(20322);let a=r.z.union([r.z.literal("exact"),r.z.literal("contains"),r.z.literal("icontains"),r.z.literal("in"),r.z.literal("startswith"),r.z.literal("gte"),r.z.literal("gt"),r.z.literal("lte"),r.z.literal("lt"),r.z.literal("range"),r.z.literal("isEmpty"),r.z.literal("isNotEmpty")]),l=r.z.object({fieldId:r.z.string(),operator:a,value:r.z.union([r.z.string(),r.z.number(),r.z.boolean(),r.z.array(r.z.union([r.z.string(),r.z.number(),r.z.boolean()]))])}),u=r.z.number().int().nonnegative(),c=r.z.lazy(()=>r.z.union([r.z.object({and:r.z.array(r.z.union([u,c]))}),r.z.object({or:r.z.array(r.z.union([u,c]))})])).openapi({ref:"ConditionalLogicGrouping"}),p=5,d=r.z.object({id:i.rF.optional(),name:r.z.string(),nameAutoGenerated:r.z.boolean().default(!1).optional().openapi({effectType:"input"}),required:r.z.boolean(),hidden:r.z.boolean().optional(),label:r.z.string(),placeholder:r.z.string().optional(),helpText:r.z.string().optional(),defaultValue:r.z.string().optional(),tablesFieldKey:r.z.string().optional(),conditionalLogic:r.z.array(l).max(p).default([]).openapi({effectType:"input"}),conditionalLogicGrouping:c.optional(),readOnly:r.z.boolean().default(!1).optional()}),s=255,f=d.extend({inputType:r.z.union([r.z.literal("text"),r.z.literal("textarea"),r.z.literal("url"),r.z.literal("multi-url")])}).openapi({ref:"InterfaceFieldBlockStandardConfig"}),z=d.extend({inputType:r.z.literal("dropdown"),options:r.z.string().optional(),multiSelect:r.z.boolean().optional(),tableId:r.z.string().optional(),tableFieldId:r.z.number().or(r.z.string()).optional()}).openapi({ref:"InterfaceFieldBlockDropdownConfig"}),b=d.extend({inputType:r.z.literal("number"),min:r.z.string().optional(),max:r.z.string().optional()}).openapi({ref:"InterfaceFieldBlockNumberConfig"}),g=d.extend({inputType:r.z.literal("yes-no")}).openapi({ref:"InterfaceFieldBlockYesNoConfig"}),m=d.extend({inputType:r.z.literal("email"),blockFreeEmailProviders:r.z.boolean().optional(),restrictDomains:r.z.boolean().optional(),allowedDomains:r.z.string().optional()}).openapi({ref:"InterfaceFieldBlockEmailConfig"}),y=[{label:"YYYY-MM-DD",value:"yyyy-MM-dd"},{label:"MM-DD-YYYY",value:"MM-dd-yyyy"},{label:"DD-MM-YYYY",value:"dd-MM-yyyy"}],k=d.extend({inputType:r.z.literal("date-picker"),dateFormat:r.z.string().optional(),includeTime:r.z.boolean().default(!1).openapi({effectType:"input"}),defaultToNow:r.z.boolean().default(!1).openapi({effectType:"input"})}).openapi({ref:"InterfaceFieldBlockDatepickerConfig"}),h=[{label:"(555) 555-1212",value:"phone_number_format_1"},{label:"+1 (555) 555-1212",value:"phone_number_format_2"},{label:"+44 55 1234 5678",value:"phone_number_format_3"}],T=d.extend({inputType:r.z.literal("phone-number"),phoneNumberFormat:r.z.string().default("phone_number_format_1").openapi({effectType:"input"}),defaultCountry:r.z.string().length(2).optional().default("US").openapi({effectType:"input"})}).openapi({ref:"InterfaceFieldBlockPhoneNumberConfig"}),x=d.extend({inputType:r.z.literal("checkbox"),label:r.z.string().optional().default("").openapi({effectType:"input"}),text:r.z.string(),defaultChecked:r.z.boolean().default(!1).openapi({effectType:"input"})}).openapi({ref:"InterfaceFieldBlockCheckboxConfig"}),I=d.extend({inputType:r.z.literal("file-upload"),allowedFileTypes:r.z.string().optional(),allowedFileSize:r.z.number().optional()}).openapi({ref:"InterfaceFieldBlockFileUploadConfig"}),v=d.extend({inputType:r.z.literal("multiple-file-upload"),allowedFileTypes:r.z.string().optional(),allowedFileSize:r.z.number().optional(),allowedFileCount:r.z.number().optional()}),w=d.extend({inputType:r.z.literal("ai-formula")}).openapi({ref:"InterfaceFieldBlockAIFormulaConfig"}),C=d.extend({inputType:r.z.literal("multiple-linked-record")}).openapi({ref:"InterfaceFieldBlockMultipleLinkedRecordsConfig"}),j=d.extend({inputType:r.z.literal("linked-record")}).openapi({ref:"InterfaceFieldBlockLinkedRecordConfig"}),_=[{label:"Default ($20.11)",value:"usd1"},{label:"USD ($20.11)",value:"usd2"},{label:"Euro (20.11€)",value:"euro1"},{label:"Pound (\xa320.11)",value:"pound1"},{label:"Yen (\xa520.11)",value:"yen1"}],M=[{label:"00",value:0},{label:"0.00",value:2}],A=d.extend({inputType:r.z.literal("currency"),decimals:r.z.number().default(M[0].value).openapi({effectType:"input"}),currencyFormat:r.z.string().default(_[0].value).openapi({effectType:"input"})}).openapi({ref:"InterfaceFieldBlockCurrencyConfig"}),F=r.z.union([f,z,b,g,m,k,T,x,I,A,w,C,j,v]),B=i.rA.extend({type:r.z.literal(o.KM),config:F}).openapi({ref:"FieldBlock"})},44055:function(e,t,n){n.d(t,{$_:function(){return r},KM:function(){return o},YV:function(){return a},gr:function(){return l}});var i=n(77074);let o="form-block",r=i.BlockType.Form,a={[o]:r},l={[r]:o}},49361:function(e,t,n){n.d(t,{Uc:function(){return u},oQ:function(){return d}}),n(86475);var i=n(9816),o=n(24621),r=n(52989),a=n(20322),l=n(44055);let u=a.z.discriminatedUnion("type",[o.xr,o.co,o.RL]),c=a.z.enum(["tables"]),p=["navigate","notification","openExternalUrl"],d=i.rA.extend({type:a.z.literal(l.KM),config:a.z.object({id:i.rF.optional(),submitText:a.z.string(),storageType:c.optional(),storageId:a.z.string().optional(),storageCreatedFromInterfaces:a.z.boolean().optional(),triggers:a.z.array(u).nonempty("Forms must have at least one action").refine(e=>e.filter(e=>p.includes(e.type)).length>=1&&!p.some(t=>e.filter(e=>e.type===t).length>1),{message:"Forms must have one confirmation action"}),style:i.eX.optional(),captchaEnabled:a.z.boolean().default(!1).openapi({effectType:"input"})}),children:a.z.array(r.dm)}).openapi({ref:"FormBlock"})},96392:function(e,t,n){n.d(t,{$_:function(){return r},HQ:function(){return u},KM:function(){return o},YV:function(){return a},gr:function(){return l}});var i=n(77074);let o="kanban-block",r=i.BlockType.Kanban,a={[o]:r},l={[r]:o},u=["text","number","datetime","decimal","string","email"]},72637:function(e,t,n){n.d(t,{T:function(){return d}}),n(86475);var i=n(20322),o=n(96198),r=n(9816),a=n(96392),l=n(73889),u=n(8033),c=n(51129);let p=i.z.object({value:i.z.any(),label:i.z.string()}),d=r.rA.extend({type:i.z.literal(a.KM),config:i.z.object({id:i.z.string().cuid().or(i.z.string().regex(o.Vp)).optional(),title:i.z.string().optional(),tableId:i.z.string().optional(),groupFieldId:i.z.number().or(i.z.string()).optional(),cardTitleFieldId:i.z.number().or(i.z.string()).optional(),cardDescriptionFieldId:i.z.number().or(i.z.string()).optional(),cardDetailFields:i.z.array(i.z.number().or(i.z.string())).optional(),selectedColumns:p.array().optional(),canCreateCards:i.z.boolean().default(!1).openapi({effectType:"input"}),newCardButtonCopy:i.z.string().optional(),canUpdateCards:i.z.boolean().default(!1).openapi({effectType:"input"}),canDeleteCards:i.z.boolean().default(!1).openapi({effectType:"input"}),canMoveCards:i.z.boolean().default(!0).openapi({effectType:"input"}),canMoveColumns:i.z.boolean().default(!1).openapi({effectType:"input"}),style:i.z.object({width:l.b.optional(),alignment:u.X.optional()}).optional(),filters:i.z.array(r.eq).optional(),orders:i.z.array(c.fH).optional().openapi({effectType:"input"})}),stateId:i.z.string().cuid().optional()}).openapi({ref:"KanbanBlock"})},38979:function(e,t,n){n.d(t,{$_:function(){return r},KM:function(){return o},YV:function(){return a},gr:function(){return l}});var i=n(77074);let o="layout-block",r=i.BlockType.Layout,a={[o]:r},l={[r]:o}},21914:function(e,t,n){n.d(t,{_B:function(){return x},k1:function(){return h}}),n(86475);var i=n(20322),o=n(9816),r=n(38979),a=n(96198),l=n(53485),u=n(98288),c=n(72637),p=n(8033),d=n(94087),s=n(55478),f=n(94742),z=n(49361),b=n(17377),g=n(8958),m=n(29632),y=n(50052);let k="center",h=i.z.object({id:i.z.string().cuid().or(i.z.string().regex(a.Vp)).optional(),title:i.z.string().optional(),columnCount:i.z.number().int().min(2).max(3).default(3).openapi({effectType:"input"}),itemVerticalAlignments:i.z.array(p.G).max(3).min(2).default([k,k,k]).openapi({effectType:"input"}),ordering:i.z.record(i.z.string().cuid(),i.z.number()),style:o.eX.default({alignment:"center",width:"wide"}).openapi({effectType:"input"})}),T=i.z.discriminatedUnion("type",[l.H,u.M8,c.T,d.h,s.R,f.Tc,z.oQ,b.s,g.Mk,m.I,y.Zy]).array().max(3,"Maximum 3 items allowed").default([]).openapi({effectType:"input"}),x=o.rA.extend({type:i.z.literal(r.KM),config:h,children:T}).openapi({ref:"LayoutBlock"})},29894:function(e,t,n){n.d(t,{$_:function(){return r},KM:function(){return o},YV:function(){return a},gr:function(){return l}});var i=n(77074);let o="links-block",r=i.BlockType.Links,a={[o]:r},l={[r]:o}},17377:function(e,t,n){n.d(t,{s:function(){return l}}),n(86475);var i=n(9816),o=n(20322),r=n(29894),a=n(44731);let l=i.rA.extend({type:o.z.literal(r.KM),config:o.z.object({id:i.rF.optional(),headerTitle:o.z.string(),style:i.eX.optional()}),children:o.z.array(a.D)}).openapi({ref:"LinksBlock"})},99075:function(e,t,n){n.d(t,{$_:function(){return r},KM:function(){return o},YV:function(){return a},gr:function(){return l}});var i=n(77074);let o="links-card-block",r=i.BlockType.LinksCard,a={[o]:r},l={[r]:o}},44731:function(e,t,n){n.d(t,{D:function(){return u}}),n(86475);var i=n(9816),o=n(20322),r=n(99075),a=n(86024),l=n(96198);let u=i.rA.extend({type:o.z.literal(r.KM),config:o.z.object({id:i.rF.optional(),title:o.z.string(),description:o.z.string().optional(),linkText:o.z.string(),linkType:o.z.enum(["page","url"]).default("url").optional().openapi({effectType:"input"}),pageId:o.z.string().optional(),url:o.z.string().refine(e=>!!e.match(l.sW)||(0,a.rP)(e),{message:"Not a valid link address"}),emoji:o.z.string().optional(),openInNewTab:o.z.boolean().default(!1).optional().openapi({effectType:"input"})})}).openapi({ref:"LinkCardBlock"})},77831:function(e,t,n){n.d(t,{$_:function(){return r},KM:function(){return o},YV:function(){return a},gr:function(){return l}});var i=n(77074);let o="login-form-block",r=i.BlockType.LoginForm,a={[o]:r},l={[r]:o}},83368:function(e,t,n){n.d(t,{G:function(){return u}}),n(86475);var i=n(20322),o=n(9816),r=n(77831),a=n(96198);let l=i.z.object({id:i.z.string().cuid().or(i.z.string().regex(a.Vp)).optional()}),u=o.rA.extend({type:i.z.literal(r.KM),config:l}).openapi({ref:"LoginFormBlock"})},51167:function(e,t,n){n.d(t,{$_:function(){return r},KM:function(){return o},YV:function(){return a},gr:function(){return l}});var i=n(77074);let o="markdown-text-block",r=i.BlockType.MarkdownText,a={[o]:"Text"},l={[r]:o}},94087:function(e,t,n){n.d(t,{h:function(){return c}}),n(86475);var i=n(20322),o=n(96198),r=n(9816),a=n(51167),l=n(73889),u=n(8033);let c=r.rA.extend({type:i.z.literal(a.KM),config:i.z.object({id:i.z.string().cuid().or(i.z.string().regex(o.Vp)).optional(),content:i.z.string(),textAlign:i.z.enum(["left","center"]),openLinksInSameTab:i.z.boolean().optional(),style:i.z.object({width:l.b.optional(),alignment:u.X.optional()}).optional()})}).openapi({ref:"MarkdownTextBlock"})},99843:function(e,t,n){n.d(t,{$_:function(){return r},HI:function(){return u},KM:function(){return o},YV:function(){return a},gr:function(){return l}});var i=n(77074);let o="media-block",r=i.BlockType.Media,a={[o]:r},l={[r]:o},u=["youtube","youtu.be","vimeo","loom","zappy"]},98288:function(e,t,n){n.d(t,{DD:function(){return a},M8:function(){return c},Sl:function(){return u}}),n(86475);var i=n(9816),o=n(20322),r=n(99843);let a=o.z.enum(["image","video","logo"]),l=o.z.enum(["url","upload"]),u=o.z.enum(["left","center","right"]),c=i.rA.extend({type:o.z.literal(r.KM),config:o.z.object({id:i.rF.optional(),mediaType:a.default("image").openapi({effectType:"input"}),mediaSource:l.default("url").openapi({effectType:"input"}),mediaUrl:o.z.string().optional(),height:o.z.coerce.number().max(1e3).optional().default(200).openapi({effectType:"input"}),alignContent:u.default("center").openapi({effectType:"input"}),style:i.eX.optional(),alt:o.z.string().optional()})}).openapi({ref:"MediaBlock"})},65038:function(e,t,n){n.d(t,{$_:function(){return r},F:function(){return u},KM:function(){return o},YV:function(){return a},gr:function(){return l}});var i=n(77074);let o="stripe-payment-block",r=i.BlockType.StripePayment,a={[o]:r},l={[r]:o},u=99999999},50052:function(e,t,n){n.d(t,{Df:function(){return u},Ph:function(){return p},Zy:function(){return d}}),n(86475);var i=n(20322),o=n(9816),r=n(65038),a=n(96198),l=n(24621);let u=i.z.discriminatedUnion("type",[l.xr,l.RL,l.co]),c=u.array().max(2),p=i.z.object({id:i.z.string().cuid().or(i.z.string().regex(a.Vp)).optional(),title:i.z.string().default("My product").openapi({effectType:"input"}).superRefine((e,t)=>{let n=e.trim();return n.length<=0?(t.addIssue({code:i.z.ZodIssueCode.custom,message:"Title is required"}),i.z.NEVER):n.length>100?(t.addIssue({code:i.z.ZodIssueCode.custom,message:"The title can't have more than 100 characters"}),i.z.NEVER):void 0}),description:i.z.string().optional(),buttonLabel:i.z.string().default("Place an order").openapi({effectType:"input"}).superRefine((e,t)=>{let n=e.trim();return n.length<=0?(t.addIssue({code:i.z.ZodIssueCode.custom,message:"Button label is required"}),i.z.NEVER):n.length>100?(t.addIssue({code:i.z.ZodIssueCode.custom,message:"The button label can't have more than 100 characters"}),i.z.NEVER):void 0}),currency:i.z.enum(["USD","EUR","CAD"]).default("USD").openapi({effectType:"input"}),value:i.z.number().default(100).openapi({effectType:"input"}),quantityLimit:i.z.number().min(1,"The minimum quantity limit is 1").default(5).openapi({effectType:"input"}),emoji:i.z.string().optional(),payment:i.z.discriminatedUnion("mode",[i.z.object({mode:i.z.literal("payment"),interval:i.z.null()}),i.z.object({mode:i.z.literal("subscription"),interval:i.z.enum(["week","month","year"],{message:"Subscription interval is required for subscriptions"})})]).default({mode:"payment",interval:null}).openapi({effectType:"input"}),style:o.eX.default({alignment:"center",width:"narrow"}).openapi({effectType:"input"}),triggers:c.default([]).openapi({effectType:"input"})}),d=o.rA.extend({type:i.z.literal(r.KM),config:p}).openapi({ref:"StripePaymentBlock"})},53485:function(e,t,n){n.d(t,{H:function(){return l}}),n(86475);var i=n(20322),o=n(9816),r=n(51129);let a=i.z.object({id:i.z.string()}),l=o.rA.extend({type:i.z.literal("table-listing-block"),config:i.z.object({id:o.rF.optional(),title:i.z.string().optional(),tableId:a.shape.id.optional(),hiddenFields:i.z.array(i.z.string()).optional(),columnOrder:i.z.array(i.z.number().or(i.z.string())).optional(),canCreateRecords:i.z.boolean().default(!1).openapi({effectType:"input"}),newRecordButtonCopy:i.z.string().optional(),canUpdateRecords:i.z.boolean().default(!1).openapi({effectType:"input"}),canDeleteRecords:i.z.boolean().default(!1).openapi({effectType:"input"}),canSearchRecords:i.z.boolean().default(!0).openapi({effectType:"input"}),style:o.eX.optional(),filters:i.z.array(o.eq).optional(),orders:i.z.array(r.fH).optional().openapi({effectType:"input"})})}).openapi({ref:"TableBlock"})},8033:function(e,t,n){n.d(t,{G:function(){return r},X:function(){return o}});var i=n(20322);let o=i.z.union([i.z.literal("left"),i.z.literal("center"),i.z.literal("right")]),r=i.z.union([i.z.literal("top"),i.z.literal("center"),i.z.literal("bottom")])},73889:function(e,t,n){n.d(t,{b:function(){return o}});var i=n(20322);let o=i.z.union([i.z.literal("narrow"),i.z.literal("medium"),i.z.literal("wide"),i.z.literal("full")])},9816:function(e,t,n){n.d(t,{Vd:function(){return u},eX:function(){return d},eq:function(){return f},kQ:function(){return s},rA:function(){return c},rF:function(){return p},tz:function(){return z}}),n(86475);var i=n(20322),o=n(87875),r=n(98136),a=n(96198),l=n(51129);(0,o.T)(i.z);let u=i.z.string().regex(a.$J),c=i.z.object({errors:i.z.array(r.R).optional()}).openapi({ref:"InterfaceBlockBase"}),p=i.z.string().cuid().or(i.z.string().regex(a.Vp)),d=i.z.object({width:i.z.union([i.z.literal("full"),i.z.literal("wide"),i.z.literal("medium"),i.z.literal("narrow")]).optional(),alignment:i.z.union([i.z.literal("left"),i.z.literal("center"),i.z.literal("right")]).optional()}),s=i.z.object({fieldId:i.z.number().or(i.z.string().regex(a.sW)).or(i.z.string()),operator:l.Ox.or(i.z.literal("currentUser")),value:i.z.union([i.z.string().min(1,"Value is required"),i.z.number(),i.z.boolean(),i.z.array(i.z.string().min(1,"Value is required"))])}),f=i.z.object({conditions:i.z.array(s)}),z=3},94001:function(e,t,n){n.d(t,{Pm:function(){return _},at:function(){return C},iZ:function(){return I},lk:function(){return j},oR:function(){return w}}),n(86475);var i=n(94742),o=n(20322),r=n(87875);n(9816);var a=n(94087),l=n(52989),u=n(49361),c=n(53485),p=n(72637),d=n(17377),s=n(44731),f=n(98288),z=n(27197),b=n(55478),g=n(8958),m=n(29632),y=n(21914),k=n(50052),h=n(83368);(0,r.T)(o.z),o.z.union([i.Tc,u.oQ,d.s,f.M8,c.H,y._B]);let T=o.z.union([a.h,l.dm,u.oQ,c.H,p.T,d.s,s.D,i.Tc,f.M8,z.q,b.R,g.Mk,m.I,y._B,k.Zy,h.G]).openapi({ref:"InterfaceBlock"}),x=o.z.array(T),I={"divider-block":"Divider","field-block":"Field","form-block":"Form","kanban-block":"Kanban","links-block":"Links","links-card-block":"LinksCard","markdown-text-block":"MarkdownText","media-block":"Media","table-listing-block":"TableListing","embed-block":"Embed","button-block":"Button","checklist-block":"Checklist","chatbot-block":"Chatbot","layout-block":"Layout","stripe-payment-block":"Stripe Payment","login-form-block":"Login Form"},v=Object.values(o.z.enum(["field-block","markdown-text-block","form-block","table-listing-block","kanban-block","links-block","links-card-block","chatbot-block","divider-block","media-block","embed-block","button-block","checklist-block","layout-block","stripe-payment-block","login-form-block"]).Values);for(let[e]of Object.entries(I))if(!v.includes(e))throw Error(`Must add ${e} to BlockTypeSchema`);let w={"chatbot-block":"Beta","embed-block":"Pro","layout-block":"Pro","stripe-payment-block":"New"},C="2",j=o.z.object({version:o.z.enum([C]),blocks:x}),_=j.default({version:C,blocks:[]}).openapi({effectType:"input"})},24621:function(e,t,n){n.d(t,{RL:function(){return u},co:function(){return l},xr:function(){return a}}),n(86475);var i=n(20322),o=n(9816),r=n(96198);let a=i.z.object({type:i.z.literal("navigate"),config:i.z.object({id:i.z.string().cuid().or(o.Vd).optional(),pageId:i.z.string(),pageName:i.z.string().optional(),sendQueryParams:i.z.boolean().default(!1).openapi({effectType:"input"})})}).openapi({ref:"InterfaceBlockActionNavigate"}),l=i.z.object({type:i.z.literal("notification"),config:i.z.object({id:i.z.string().cuid().or(o.Vd).optional(),message:i.z.string(),position:i.z.union([i.z.literal("top-left"),i.z.literal("top-center"),i.z.literal("top-right"),i.z.literal("bottom-left"),i.z.literal("bottom-center"),i.z.literal("bottom-right")]).optional()})}).openapi({ref:"InterfaceBlockActionNotify"}),u=i.z.object({type:i.z.literal("openExternalUrl"),config:i.z.object({id:i.z.string().cuid().or(o.Vd).optional(),url:i.z.string().regex(r.gS),sendQueryParams:i.z.boolean().default(!1).openapi({effectType:"input"}),opensInNewTab:i.z.boolean().default(!0).openapi({effectType:"input"})})}).openapi({ref:"InterfaceBlockActionOpenExternalUrl"})},98136:function(e,t,n){n.d(t,{R:function(){return r}});var i=n(20322);let o=i.z.enum(["form:table-does-not-exist","form:missing-storage-id","form:table-missing-add-records-permission","form:table-missing-add-fields-permission","form:table-missing-update-fields-permission","form:table-missing-delete-delete-permission","form:conditional-logic-invalid-field-id","form:conditional-logic-invalid-value","kanban:table-does-not-exist","kanban:missing-table-id","kanban:group-field-does-not-exist","kanban:group-field-invalid","kanban:title-field-does-not-exist","kanban:title-field-invalid","kanban:description-field-does-not-exist","kanban:description-field-invalid","kanban:no-selected-columns","kanban:empty-filter","kanban:maximum-number-of-filters-exceeded","kanban:filter-condition-field-invalid","kanban:filter-condition-operator-invalid","kanban:filter-condition-value-invalid","kanban:table-missing-add-records-permission","kanban:table-missing-update-records-permission","kanban:table-missing-delete-records-permission","kanban:order-direction-invalid","kanban:order-field-does-not-exist","kanban:order-field-invalid","table-listing:missing-table-id","table-listing:table-does-not-exist","table-listing:empty-filter","table-listing:maximum-number-of-filters-exceeded","table-listing:filter-condition-field-invalid","table-listing:filter-condition-operator-invalid","table-listing:filter-condition-value-invalid","table-listing:table-missing-add-records-permission","table-listing:table-missing-update-records-permission","table-listing:table-missing-delete-records-permission","chatbot:authentication-does-not-exist","chatbot:authentication-test-failed","chatbot:model-not-available","chatbot:max-tokens-too-high","chatbot:chatbot-does-not-exist","layout:child-not-found","checklist:missing-table-id","checklist:table-does-not-exist","checklist:missing-list-item-completed-field","checklist:missing-list-item-title-field","checklist:missing-list-item-due-date-field","checklist:missing-list-item-label-field","checklist:list-item-detail-fields-out-of-sync","checklist:table-missing-add-records-permission","checklist:table-missing-update-records-permission","checklist:table-missing-delete-records-permission","checklist:empty-filter","checklist:filter-condition-field-invalid","checklist:filter-condition-operator-invalid","checklist:filter-condition-value-invalid"]),r=i.z.object({code:o,blockId:i.z.string().nullable(),path:i.z.array(i.z.union([i.z.string(),i.z.number()]))})},10163:function(e,t,n){n.d(t,{$:function(){return u}});var i=n(31549),o=n(3224),r=n.n(o),a=n(69559);let l=n(17975).zo.div.withConfig({componentId:"sc-a7f4d495-0"})(["height:",";display:flex;align-items:center;justify-content:center;"],({$height:e})=>e);function u({className:e,height:t=0,"data-testid":n="editor-spinner",...o}){let u=r()(t)?`${t}px`:t;return(0,i.jsx)(l,{className:e,$height:u,"data-testid":n,children:(0,i.jsx)(a.$,{...o})})}},51129:function(e,t,n){n.d(t,{Ox:function(){return o},fH:function(){return a}});var i=n(20322);let o=i.z.union([i.z.literal("exact"),i.z.literal("contains"),i.z.literal("icontains"),i.z.literal("in"),i.z.literal("startswith"),i.z.literal("gte"),i.z.literal("gt"),i.z.literal("lte"),i.z.literal("lt"),i.z.literal("range")]),r=i.z.object({key:i.z.string(),operator:o.optional(),value:i.z.string()}),a=i.z.object({key:i.z.string().optional(),direction:i.z.union([i.z.literal("asc"),i.z.literal("desc")]).optional()}),l=i.z.object({filters:r.array().optional(),orders:a.array().optional(),cursor_query:i.z.discriminatedUnion("query_type",[i.z.object({query_type:i.z.literal("window"),start_cursor:i.z.string().optional(),end_cursor:i.z.string().optional()}),i.z.object({query_type:i.z.literal("before"),before_cursor:i.z.string().optional()})]).optional(),limit:i.z.number().int().optional()}),u=i.z.object({filters:r.array().optional(),orders:a.array().optional()});i.z.object({tableId:i.z.string(),filter:l,cursor:l.shape.cursor_query,fields:i.z.string().array().optional()}),i.z.object({tableId:i.z.string(),filter:u}),i.z.object({tableId:i.z.string(),recordId:i.z.string(),fields:i.z.string().array().optional()}),i.z.object({tableId:i.z.string(),body:i.z.object({new_records:i.z.object({data:i.z.record(i.z.unknown())}).array(),change_options:i.z.record(i.z.unknown()).optional()})}),i.z.object({data:i.z.record(i.z.string(),i.z.unknown()),id:i.z.string()}),i.z.object({tableId:i.z.string(),body:i.z.object({updated_records:i.z.object({id:i.z.string(),data:i.z.record(i.z.unknown())}).array(),change_options:i.z.record(i.z.unknown()).optional()}),fields:i.z.string().array().optional()}),i.z.object({tableId:i.z.string(),body:i.z.object({record_ids:i.z.string().array(),change_options:i.z.any()})}),i.z.object({recordId:i.z.string(),tableId:i.z.string()})},86024:function(e,t,n){n.d(t,{oH:function(){return a},rP:function(){return u}});var i=n(20322),o=n(67724),r=n(96198);let a=e=>{if(!e||!e.includes("@"))return!1;let t=e.split("@"),n=t[0],i=t[1];return!!(/(^[-!#$%&'*+/=?^_`{}|~0-9A-Z]+(\.[-!#$%&'*+/=?^_`{}|~0-9A-Z]+)*$|^\"([\001-\010\013\014\016-\037!#-\[\]-\177]|\\[\001-\011\013\014\016-\177])*\"$)/i.test(n)&&(l(i)||l((0,o.H9)(i))))},l=e=>{if(/^((?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+)(?:[A-Z0-9-]{1,62}[A-Z0-9])$/i.test(e))return!0;let t=e.match(/\[([A-F0-9:.]+)\]$/i);if(t){let e=t[0];return i.z.string().ip().safeParse(e).success}return!1},u=e=>{if(!e||"about:blank"===e)return!0;e=e.trim();let t=(0,r.Qv)(e),n=e.match(r.nP);return!t?.hasDomainWithoutProtocol&&!!(t.isMatch||n)}},88019:function(e,t,n){n.d(t,{WC:function(){return d}}),n(86475);var i=n(20322);let o=i.z.object({type:i.z.literal("form-submission"),formId:i.z.string().cuid()}),r=i.z.object({type:i.z.literal("new-record"),tableId:i.z.string()}),a=i.z.object({type:i.z.literal("record-updated"),tableId:i.z.string()}),l=i.z.object({type:i.z.literal("record-field-updated"),tableId:i.z.string(),fieldId:i.z.string(),fieldValue:i.z.string().or(i.z.boolean()).optional()}),u=i.z.object({type:i.z.literal("button-click"),blockId:i.z.string()}),c=i.z.object({type:i.z.literal("stripe-payment-processed"),blockId:i.z.string()});i.z.union([o,r,a,l,u,c]);let p=i.z.object({projects:i.z.string().cuid().array().optional(),pages:i.z.string().cuid().array().optional(),tables:i.z.string().array().optional(),forms:i.z.string().cuid().array().optional(),buttons:i.z.string().cuid().array().optional(),stripePayments:i.z.string().cuid().array().optional(),blockActions:i.z.string().cuid().array().optional()}),d=i.z.object({id:i.z.string(),title:i.z.string(),zdl:i.z.record(i.z.string(),i.z.any()).optional(),paused:i.z.boolean(),relations:p.optional()}).openapi({ref:"Zap"}),s=i.z.object({useCache:i.z.boolean().optional().default(!0).openapi({effectType:"input"})});i.z.union([s.extend({projectId:i.z.string().cuid()}),s.extend({projectIds:i.z.string().cuid().array()}),s.extend({blockId:i.z.string().cuid()}),s.extend({blockActionId:i.z.string().cuid()}),s.extend({pageId:i.z.string().cuid()}),s.extend({formId:i.z.string().cuid()}),s.extend({tableId:i.z.string()}),s.extend({buttonId:i.z.string().cuid()}),s.extend({stripePaymentId:i.z.string().cuid()})])},96198:function(e,t,n){n.d(t,{$J:function(){return u},Av:function(){return o},C6:function(){return z},FP:function(){return h},GY:function(){return b},Jv:function(){return s},Nm:function(){return T},Qv:function(){return m},Rh:function(){return k},S5:function(){return d},Vp:function(){return l},Xv:function(){return p},by:function(){return v},gS:function(){return r},h7:function(){return a},m$:function(){return i},nP:function(){return y},oA:function(){return c},sW:function(){return I},wM:function(){return f},x2:function(){return x}});let i=/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/,o=/^[\d]{6}$/,r=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i,a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,l=/^_BLOCK_(\d+)$/,u=/^_ACTION_(\d+)$/,c=/^[a-zA-Z0-9\s-]*$/,p=/^[a-z0-9](?:[a-z0-9\-]{0,30}[a-z0-9])?$/,d=/^[a-z0-9](?:[a-z0-9\-]{0,61}[a-z0-9])?$/,s=RegExp(d,"i"),f=/^#(?:[0-9A-F]{3,4}|[0-9A-F]{6}|[0-9A-F]{8})$/i,z=/^#(?:[0-9A-F]{3,4}|[0-9A-F]{6}|[0-9A-F]{8})$|^(?:rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)$|^(?:rgba)\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*(?:,\s*(?:0(?:\.\d{1,3})?|1(?:\.0{1,3})?))?\s*\)$/i,b=/^[A-Z][A-Z0-9]?-[A-Z0-9]{4,10}(?:\-[1-9]\d{0,3})?$/i,g=/^(?:(https?|mailto|ftp|tel|file|sms):|([^&:/?#]*)(?:[/?#]|$))/i,m=e=>{let t=e.match(g);return{isMatch:!!t,hasProtocol:!!t?.[1]?.length,hasDomainWithoutProtocol:!!t?.[2]?.length}},y=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i,k=/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/,h=/vimeo\.com\/(\d+)/,T=/loom\.com\/share\/([a-zA-Z0-9]+)/,x=/cdn\.zappy\.app\/[0-9a-f]{32}\.mp4/,I=/\$\{\{ *([A-Za-z0-9_\.]+) *\}\}/g,v=/^(\*\.){0,1}([a-zA-Z0-9\-]+\.){1,}[a-zA-Z0-9\-]+(:[0-9]{1,5}){0,1}$/}}]);
//# sourceMappingURL=4888-733c6e1d6d64e998.js.map