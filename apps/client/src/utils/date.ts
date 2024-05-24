import dayjs from "dayjs";
import dayjsTimezone from "dayjs/plugin/timezone";
import dayjsUtc from "dayjs/plugin/utc";

dayjs.extend(dayjsUtc);
dayjs.extend(dayjsTimezone);

dayjs.tz.setDefault(dayjs.tz.guess());

export { dayjs };
