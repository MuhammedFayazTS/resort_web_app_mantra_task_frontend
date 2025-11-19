"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    InputGroup,
    InputGroupTextarea,
} from "@/components/ui/input-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { bookingFormSchema } from "@/validators/booking.schema"

const initialValues = {
    name: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
    adults: 1,
    children: 0,
    roomType: "",
    accommodation: false,
    adventureActivities: false,
    wellnessSpa: false,
    specialRequest: ""
} satisfies z.infer<typeof bookingFormSchema>

export function BookingForm() {
    const form = useForm<z.infer<typeof bookingFormSchema>>({
        resolver: zodResolver(bookingFormSchema),
        defaultValues: initialValues
    })

    function onSubmit(data: z.infer<typeof bookingFormSchema>) {
        console.table(data)
        toast("Booking submitted!")
    }

    return (
        <Card className="w-full sm:max-w-xl">
            <CardHeader>
                <CardTitle>Resort Booking</CardTitle>
                <CardDescription>Reserve your stay with all necessary details.</CardDescription>
            </CardHeader>

            <CardContent>
                <form id="booking-form" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>

                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Name</FieldLabel>
                                    <Input {...field} placeholder="John Doe" />
                                    {fieldState.error && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Email</FieldLabel>
                                    <Input {...field} placeholder="john@example.com" />
                                    {fieldState.error && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="phone"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Phone</FieldLabel>
                                    <Input {...field} placeholder="+91 9999999999" />
                                    {fieldState.error && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Controller
                                name="checkInDate"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel>Check-In Date</FieldLabel>
                                        <Input {...field} type="date" />
                                        {fieldState.error && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />

                            <Controller
                                name="checkOutDate"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel>Check-Out Date</FieldLabel>
                                        <Input {...field} type="date" />
                                        {fieldState.error && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Controller
                                name="adults"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel>Adults</FieldLabel>
                                        <Input {...field} type="number" min={1} />
                                        {fieldState.error && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />

                            <Controller
                                name="children"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel>Children</FieldLabel>
                                        <Input {...field} type="number" min={0} />
                                        {fieldState.error && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />
                        </div>

                        <Controller
                            name="roomType"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Room Type</FieldLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select room type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="deluxe">Deluxe Room</SelectItem>
                                            <SelectItem value="suite">Suite</SelectItem>
                                            <SelectItem value="family">Family Room</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {fieldState.error && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <FieldLabel>Additional Services</FieldLabel>
                        <div className="flex flex-col gap-3">
                            <Controller
                                name="accommodation"
                                control={form.control}
                                render={({ field }) => (
                                    <label className="flex items-center gap-2">
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                        Accommodation
                                    </label>
                                )}
                            />
                            <Controller
                                name="adventureActivities"
                                control={form.control}
                                render={({ field }) => (
                                    <label className="flex items-center gap-2">
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                        Adventure Activities
                                    </label>
                                )}
                            />
                            <Controller
                                name="wellnessSpa"
                                control={form.control}
                                render={({ field }) => (
                                    <label className="flex items-center gap-2">
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                        Wellness & Spa
                                    </label>
                                )}
                            />
                        </div>

                        <Controller
                            name="specialRequest"
                            control={form.control}
                            render={({ field }) => (
                                <Field>
                                    <FieldLabel>Special Request</FieldLabel>
                                    <InputGroup>
                                        <InputGroupTextarea {...field} rows={4} placeholder="Anything specific you need?" />
                                    </InputGroup>
                                </Field>
                            )}
                        />

                    </FieldGroup>
                </form>
            </CardContent>

            <CardFooter>
                <Field orientation="horizontal">
                    <Button type="button" variant="outline" onClick={() => form.reset()}>
                        Reset
                    </Button>
                    <Button type="submit" form="booking-form">
                        Submit
                    </Button>
                </Field>
            </CardFooter>
        </Card>
    )
}

export default BookingForm
