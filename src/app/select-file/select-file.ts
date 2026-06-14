import { Component, inject, signal } from '@angular/core';
import { form, FormField, FormRoot, pattern, required } from '@angular/forms/signals';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ord-select-file',
  imports: [FormRoot, FormField],
  templateUrl: './select-file.html',
  styleUrl: './select-file.css',
})
export class SelectFile {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  myModel = signal({
    link: '',
  });

  myForm = form(
    this.myModel,
    (schema) => {
      required(schema.link);
      pattern(
        schema.link,
        // source: https://regexbox.com/regex-templates/url
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/,
        { message: 'Link must be a valid URL.' },
      );
    },
    {
      submission: {
        action: async (field) => {
          await this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
              ordFile: field.link().value(),
            },
          });
        },
      },
    },
  );
}
