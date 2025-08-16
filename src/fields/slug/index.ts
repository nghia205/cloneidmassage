import type { CheckboxField, TextField } from 'payload'

import { formatSlugHook } from './formatSlug'
import slugify from 'slugify'

type Overrides = {
  slugOverrides?: Partial<TextField>
  checkboxOverrides?: Partial<CheckboxField>
}

type Slug = (fieldToUse?: string, overrides?: Overrides) => [TextField, CheckboxField]

export const slugField: Slug = (fieldToUse = 'title', overrides = {}) => {
  const { slugOverrides, checkboxOverrides } = overrides

  const checkBoxField: CheckboxField = {
    name: 'slugLock',
    type: 'checkbox',
    defaultValue: true,
    admin: {
      hidden: true,
      position: 'sidebar',
    },
    ...checkboxOverrides,
  }

  // @ts-expect-error - ts mismatch Partial<TextField> with TextField
  const slugField: TextField = {
    name: 'slug',
    type: 'text',
    index: true,
    label: 'Slug',
    ...(slugOverrides || {}),
    hooks: {
      // Kept this in for hook or API based updates
      beforeValidate: [
        ({ data }) => {
          if (data?.title) {
            let text = data.title
              // Bỏ emoji và ký tự đặc biệt (ngoài chữ và số, dấu cách, -)
              .replace(/[^\p{L}\p{N}\s-]/gu, '')
              // Bỏ dấu tiếng Việt
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              // Chuyển đ và Đ thành d
              .replace(/đ/g, 'd')
              .replace(/Đ/g, 'd')

            // Dùng slugify để chuẩn hóa dấu gạch ngang
            return slugify(text, {
              lower: true,
              strict: true,
            })
          }
        },
      ],
    },
    admin: {
      position: 'sidebar',
      ...(slugOverrides?.admin || {}),
      components: {
        Field: {
          path: '@/fields/slug/SlugComponent#SlugComponent',
          clientProps: {
            fieldToUse,
            checkboxFieldPath: checkBoxField.name,
          },
        },
      },
    },
  }

  return [slugField, checkBoxField]
}
