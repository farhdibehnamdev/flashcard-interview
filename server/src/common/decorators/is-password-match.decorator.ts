import {
  ValidationArguments,
  ValidatorConstraint,
  ValidationOptions,
  registerDecorator,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isPasswordMatch', async: false })
export class IsPasswordMatchConstraint implements ValidatorConstraintInterface {
  validate(value: any, args?: ValidationArguments): boolean {
    const [relatedPropertyName] = args.constraints;
    const relatedValue = (args.object as any)[relatedPropertyName];
    return value === relatedValue;
  }
  defaultMessage(): string {
    return 'Password and password confirmation do not match';
  }
}

export function IsPasswordMatch(
  property: string,
  validationOptions?: ValidationOptions,
) {
  console.log('property ::', property);
  console.log('validoptions ::', validationOptions);
  return function (obj: Record<string, any>, propertyName: string) {
    console.log('obj ::', obj);
    console.log('propertyName ::', propertyName);
    registerDecorator({
      target: obj.constructor,
      propertyName,
      options: validationOptions,
      constraints: [property],
      validator: IsPasswordMatchConstraint,
    });
  };
}
